import { motion } from "framer-motion";

const cards = [
  {
    title: "Missão",
    description:
      "Conectar empresas aos melhores talentos de forma estratégica, ágil e humanizada.",
  },
  {
    title: "Visão",
    description:
      "Ser referência nacional em soluções digitais de RH para pequenas empresas.",
  },
  {
    title: "Valores",
    description:
      "Estratégia antes da contratação. Não indicamos candidatos, estruturamos processos.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SobreEmpresa: React.FC = () => {
  return (
    <section
      id="sobreempresa"
      className="bg-slate-900 text-white px-6 py-20 md:py-28 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Badge */}
        <motion.span
          variants={fadeUp}
          className="inline-block mb-6 px-4 py-1 text-sm rounded-full 
                     bg-blue-500/10 text-blue-400 border border-blue-500/20"
        >
          Sobre a ELEVVA
        </motion.span>

        {/* Título */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          RH estratégico, simples e digital.
        </motion.h2>

        {/* Descrição */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          A ELEVVA nasceu para ajudar pequenas empresas a crescerem com
          estrutura. Sabemos que muitos CEOs enfrentam dificuldades para
          contratar as pessoas certas, organizar processos internos e manter
          conformidade trabalhista — tudo isso enquanto precisam cuidar da
          operação e das vendas.
          <br />
          <br />
          Nossa missão é simplificar o RH, digitalizar processos e transformar
          contratação em estratégia de crescimento.
          <br />
          <br />
          Não somos apenas recrutamento. Somos estrutura, clareza e escala para
          o seu negócio.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-slate-800/60 backdrop-blur-md 
                         border border-slate-700 
                         rounded-2xl p-8 
                         hover:bg-slate-800 
                         transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {card.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SobreEmpresa;
