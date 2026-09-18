from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import xml.etree.ElementTree as ET

root = Path('out')
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.h1, self.canonicals, self.images, self.links, self.ids = path, 0, [], [], [], set()
        self.json_text, self.in_json = '', False
        self.graph = []
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.add(a['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'link' and a.get('rel') == 'canonical': self.canonicals.append(a['href'])
        if tag == 'img':
            assert 'alt' in a, (self.path, 'missing alt')
            assert a.get('srcset'), (self.path, 'missing responsive sources')
            self.images += [a['src']] + [part.strip().split()[0] for part in a['srcset'].split(',')]
        if tag == 'a' and a.get('href', '').startswith(('/', '#')): self.links.append(a['href'])
        if tag == 'script' and a.get('type') == 'application/ld+json': self.in_json = True
    def handle_data(self, data):
        if self.in_json: self.json_text += data
    def handle_endtag(self, tag):
        if tag == 'script' and self.in_json:
            self.graph += json.loads(self.json_text)['@graph']
            self.json_text, self.in_json = '', False

pages = {}
for path in [root/'index.html', *root.glob('ambientes/*/index.html')]:
    page = Page(path)
    route = '/' + str(path.relative_to(root)).removesuffix('index.html')
    pages[route] = page
    assert page.h1 == 1, (route, 'H1 count', page.h1)
    assert page.canonicals == ['https://ocaplanejados.com' + route], (route, page.canonicals)
    assert sum(entity['@type'] == 'WebPage' for entity in page.graph) == 1
    company = next(entity for entity in page.graph if entity['@type'] == 'FurnitureStore')
    assert company['sameAs'] == ['https://www.instagram.com/ocaplanejados_/']
    for image in page.images: assert (root / unquote(urlsplit(image).path).lstrip('/')).is_file(), image
for route, page in pages.items():
    for link in page.links:
        url = urlsplit(link)
        target = url.path or route
        assert target in pages, (route, 'broken link', link)
        if url.fragment: assert url.fragment in pages[target].ids, (route, 'missing anchor', link)
sitemap = ET.parse(root/'sitemap.xml')
locations = {element.text for element in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
assert locations == {'https://ocaplanejados.com' + route for route in pages}
assert 'Allow: /' in (root/'robots.txt').read_text()
assert len(pages) == 4
print(f'PASS: {len(pages)} pages; H1, canonical, schema, Instagram, sitemap, links, anchors and responsive image assets.')
