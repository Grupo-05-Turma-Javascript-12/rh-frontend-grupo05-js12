import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "A ELEVVA é apenas uma empresa de recrutamento?",
    answer:
      "Não. Atuamos como uma solução completa de RH digital, estruturando processos, organizando pessoas e profissionalizando a gestão de talentos.",
  },
  {
    question: "Vocês atendem empresas de qualquer porte?",
    answer:
      "Somos especializados em pequenas empresas que estão crescendo e precisam de organização em RH.",
  },
  {
    question: "Quanto tempo leva para estruturar o RH?",
    answer:
      "Depende do nível atual da empresa, mas em média 30 a 60 dias já geram resultados visíveis.",
  },
  {
    question: "Vocês trabalham com contratos mensais?",
    answer:
      "Sim. Trabalhamos com modelos flexíveis de acordo com a necessidade da empresa.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer:
      "Realizamos um diagnóstico estratégico gratuito para entender suas dores e propor um plano de ação.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-block">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Perguntas <br /> frequentes
          </h1>
        </motion.div>

        {/* LISTA DE FAQs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {faqs.map((item, idx) => (
            <motion.div
              key={idx}
              className="border-b border-gray-700"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="text-lg font-medium">{item.question}</span>

                <motion.svg
                  className="h-6 w-6 text-blue-400"
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden pb-4"
                  >
                    <p className="text-gray-300">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Faq;
