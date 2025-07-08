import React, { useState } from 'react';



const faqs = [
  {
    question: "¿Cuáles son los requisitos para ser agente de Govermen?",
    answer: ["Tener 18 años de edad",
      'Curso Sucamec (Deseable)',
      'Experiencia en seguridad (Deseable)',
      'Honestidad, responsabilidad y apasionado de la seguridad',
    ],
  },
  {
    question: '¿Cuál es la cobertura de nuestro servicio?',
    answer: ['Lima y Callao'],
  },
  {
    question: '¿Qué rubros son los abarca nuestro servicio?',
    answer: ['Industrial',
      'Metalúrgico',
    ],
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 text-wh text-white p-4 md:p-0" >
        <h2 className='text-bg-black text-center text-white text-5xl pb-[3rem] font-figtree'>¿Tienes Preguntas?</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-t border-gray-200 ">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between py-4 text-left text-lg font-medium text-white hover:text-rojo focus:outline-none"
          >
            {faq.question}
            <span className="text-4xl font-light text-white ">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="pb-4 pr-6 text-lg text-white text-start">
              <ul className='list-disc pl-10'>
                {faq.answer.map((item, i ) =>(
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}