import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface SobreNosCard {
  name: string;
  role: string;
  photo: string; // 🔥 COLOQUE SUA FOTO AQUI
  description: string;
}

const cards: SobreNosCard[] = [
  {
    name: "Ana Beatriz",
    role: "Desenvolvedora Fullstack",
    photo: "/ana.jpg",
    description: "Descrição detalhada da Ana.",
  },
  {
    name: "Andreza Luiza",
    role: "Desenvolvedora Fullstack",
    photo: "/luiza.jpg",
    description:
      "Desenvolvedora Full Stack em formação, com experiência em HTML, CSS, JavaScript, React, TypeScript e Node.js. Atuando em projetos práticos, desenvolvo interfaces responsivas e funcionais, integrando front-end e back-end com organização e boas práticas. Comprometida com aprendizado contínuo e evolução constante na área de tecnologia.",
  },
  {
    name: "Cesar Henrique",
    role: "Desenvolvedor Fullstack",
    photo: "/cesar.jpg",
    description: "Descrição detalhada do Cesar.",
  },
  {
    name: "João Henrique",
    role: "Desenvolvedor Fullstack",
    photo: "/joao.jpg",
    description:
      "Desenvolvedor Fullstack com sólida experiência na construção de APIs escaláveis e aplicações web modernas utilizando Node.js, NestJS, TypeScript, Java, Spring Boot, React, MongoDB e SQL. Atuo no desenvolvimento de back-end robusto até a criação de interfaces front-end funcionais, sempre priorizando escalabilidade, performance e segurança",
  },
  {
    name: "Josenil Soares",
    role: "Desenvolvedor Fullstack",
    photo: "/josenil.jpg",
    description: "Descrição detalhada do Josenil.",
  },
  {
    name: "Raylander Ribeiro",
    role: "Desenvolvedor Fullstack",
    photo: "/raylander.jpg",
    description:
      "Desenvolvedor Full Stack com especialização em arquiteturas cloud-native e práticas DevOps. Construo aplicações web completas utilizando TypeScript e Python, desde o front-end até a infraestrutura cloud.",
  },
  {
    name: "Stephanie Mayara",
    role: "Desenvolvedora Fullstack",
    photo: "/stephanie.jpg",
    description: "Descrição detalhada da Stephanie.",
  },
];

export default function SobreNos() {
  const [active, setActive] = useState<SobreNosCard | null>(null);

  return (
    <section className="relative bg-slate-900 py-32 px-6 overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white tracking-tight">
            O time Axiom
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Construindo tecnologia com estratégia, clareza e visão de futuro.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {cards.map((card) => (
            <motion.div
              key={card.name}
              layoutId={`card-${card.name}`}
              onClick={() => setActive(card)}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              {/* Glow Border */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-800/60 backdrop-blur-xl border border-slate-700">
                {/* FOTO VERTICAL */}
                <motion.img
                  layoutId={`image-${card.name}`}
                  src={card.photo} // 🔥 FOTO AQUI
                  alt={card.name}
                  className="w-full h-[360px] object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

                {/* Texto */}
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-white font-semibold text-lg">
                    {card.name}
                  </h3>
                  <p className="text-indigo-400 text-sm">{card.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL FUTURISTA */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            <motion.div
              layoutId={`card-${active.name}`}
              className="fixed inset-0 z-50 flex items-center justify-center px-6"
            >
              <motion.div
                className="relative bg-slate-800/80 backdrop-blur-2xl border border-slate-700 rounded-3xl max-w-5xl w-full overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.25)]"
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                <div className="grid md:grid-cols-2">
                  {/* FOTO EXPANDIDA */}
                  <motion.img
                    layoutId={`image-${active.name}`}
                    src={active.photo}
                    alt={active.name}
                    className="w-full h-[550px] object-cover object-top"
                  />

                  {/* CONTEÚDO */}
                  <div className="p-12 flex flex-col justify-center">
                    <h3 className="text-4xl font-bold text-white">
                      {active.name}
                    </h3>
                    <p className="text-indigo-400 mt-3">{active.role}</p>

                    <p className="text-slate-300 mt-8 leading-relaxed">
                      {active.description}
                    </p>

                    <button
                      onClick={() => setActive(null)}
                      className="mt-10 text-sm text-slate-400 hover:text-white transition"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
