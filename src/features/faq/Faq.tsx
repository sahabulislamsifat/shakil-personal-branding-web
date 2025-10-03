// Accordion Component
function Accordion({ faq, isOpen, onClick }) {
  return (
    <div className="py-3">
      <button onClick={onClick} className="flex w-full text-left gap-3">
        {/* Fixed width for icon so layout doesn’t break */}
        <span className="w-5 text-2xl leading-none font-light">
          {isOpen ? "−" : "+"}
        </span>
        <span className="text-base flex-1">{faq.question}</span>
      </button>
      {isOpen && (
        <div className="mt-2 pl-8 text-gray-600 text-sm">{faq.answer}</div>
      )}
    </div>
  );
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      {/* Our Process */}
      <section>
        <h2 className="text-sm uppercase tracking-widest text-gray-500">
          What We Do Best
        </h2>
        <h1 className="text-3xl mt-2 mb-10">Our Process</h1>
        {/* grid responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {processSteps.map((step, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm text-gray-400">{step.phase}</h3>
              <h2 className="text-3xl">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col md:flex-row md:justify-between md:gap-44 gap-8">
        {/* left title */}
        <h2 className="text-2xl">Frequently Asked Questions</h2>

        {/* right questions */}
        <div className="flex-1">
          {faqs.map((faq, idx) => (
            <Accordion
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
