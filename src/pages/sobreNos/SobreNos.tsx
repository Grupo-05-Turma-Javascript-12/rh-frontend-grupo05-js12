import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface SobreNosCard {
  name: string;
  role: string;
  photo: string; // 🔥 COLOQUE SUA FOTO EM /public
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
    description: "Desenvolvedora Full Stack em formação...",
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
    description: "Desenvolvedor Fullstack com sólida experiência...",
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
      "Desenvolvedor Full Stack com especialização em arquiteturas cloud-native...",
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
      {/* Background Glow Global */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-indigo-500/20 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-32">
        {/* ================== AXIOM INTRO ================== */}
        <div className="text-center space-y-8">
          {/* 🔥 COLOQUE SUA LOGO AQUI */}
          <div className="flex justify-center">
            <div className="w-84 h-60 flex items-center justify-center text-slate-500">
              <img src="/axiom-logo.png" alt="logo axiom" />
            </div>
          </div>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Somos uma software house focada na construção de soluções digitais
            modernas, escaláveis e inteligentes. Unimos arquitetura robusta,
            design estratégico e visão de longo prazo.
          </p>
        </div>

        {/* ================== STACK ================== */}
        <div className="text-center space-y-12">
          <h3 className="text-3xl font-semibold text-white">
            Tecnologias que utilizamos
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {["TypeScript", "React", "NestJS", "PostgreSQL"].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-8 py-3 rounded-full bg-slate-800/60 backdrop-blur-xl border border-slate-700 text-indigo-400 tracking-wide shadow-[0_0_30px_rgba(99,102,241,0.2)]"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================== MISSÃO ================== */}
        <div className="relative rounded-3xl bg-slate-800/50 backdrop-blur-2xl border border-slate-700 p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl font-semibold text-white mb-8">
              Nossa missão
            </h3>

            <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
              Desenvolver soluções digitais que gerem impacto real, entregando
              sistemas confiáveis, escaláveis e preparados para o futuro.
              Construímos tecnologia com responsabilidade e visão estratégica.
            </p>
          </div>
        </div>

        {/* ================== TIME ================== */}
        <div>
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-white">O time Axiom</h3>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
              Construindo tecnologia com estratégia, clareza e visão de futuro.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            {cards.map((card) => (
              <motion.div
                key={card.name}
                layoutId={`card-${card.name}`}
                onClick={() => setActive(card)}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.04 }}
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

                <div className="relative rounded-2xl overflow-hidden bg-slate-800/60 backdrop-blur-xl border border-slate-700">
                  {/* 🔥 FOTO AQUI (vertical) */}
                  <motion.img
                    layoutId={`image-${card.name}`}
                    src={card.photo}
                    alt={card.name}
                    className="w-full h-[380px] object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

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

        {/* ================== CTA ================== */}
        <div className="text-center pt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contato"
            className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] transition-all duration-500"
          >
            Fale com a Axiom
          </motion.a>

          <p className="text-slate-500 text-sm mt-6">
            Vamos construir algo extraordinário juntos.
          </p>
        </div>
      </div>

      {/* ================== MODAL ================== */}
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
              <motion.div className="relative bg-slate-800/80 backdrop-blur-2xl border border-slate-700 rounded-3xl max-w-5xl w-full overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.25)]">
                <div className="grid md:grid-cols-2">
                  <motion.img
                    layoutId={`image-${active.name}`}
                    src={active.photo}
                    alt={active.name}
                    className="w-full h-[600px] object-cover object-top"
                  />

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
