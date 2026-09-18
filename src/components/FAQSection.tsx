import { faqs } from '@/lib/site';

export default function FAQSection() {
  return (
    <section id="duvidas" className="py-24 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Dúvidas sobre móveis planejados</h2>
        <p className="text-white/70 mb-10">Informações para começar seu projeto em João Pessoa.</p>
        <div className="divide-y divide-white/15">
          {faqs.map(item => (
            <details key={item.question} className="py-6 group">
              <summary className="cursor-pointer text-white text-lg font-medium">{item.question}</summary>
              <p className="text-white/70 text-base leading-relaxed mt-4">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
