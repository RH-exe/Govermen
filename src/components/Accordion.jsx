import React, { useState } from 'react';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus.",
  },
  {
    question: 'How do you make holy water?',
    answer: 'You boil the hell out of it.',
  },
  {
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows.',
  },
  {
    question: 'Why do you never see elephants hiding in trees?',
    answer: 'Because they’re so good at it.',
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer: 'Because the “P” is silent.',
  },
  {
    question: 'Why did the invisible man turn down the job offer?',
    answer: 'He couldn’t see himself doing it.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 text-wh text-white p-4 md:p-0" >
        <h2 className='text-bg-black text-center text-white text-[2rem] pb-[3rem] font-figtree'>¿Tienes Preguntas?</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-t border-gray-200 ">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between py-4 text-left text-lg font-medium text-white hover:text-rojo focus:outline-none"
          >
            {faq.question}
            <span className="text-2xl font-light text-white ">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="pb-4 pr-6 text-sm text-white">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}