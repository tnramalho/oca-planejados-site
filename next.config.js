/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
    deviceSizes: [640, 768, 960, 1280, 1600, 1920, 2400],
    imageSizes: [160, 320, 480],
  },
};

module.exports = nextConfig;
