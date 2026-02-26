import { motion } from "framer-motion";

export default function Valores() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className="w-full bg-slate-50">
      {/* ======= BLOCO VALORES (BRANCO) ======= */}
      <motion.div
        className="mx-auto max-w-6xl px-6 py-20"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <motion.span
              variants={fadeUp}
              className="flex w-fit gap-2 items-center mb-6 px-4 py-1 text-xs rounded-full bg-blue-50/10 text-blue-500 border border-blue-500/20"
            >
              VALORES
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900"
            >
              O que guia a Elevva
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="lg:pt-8">
            <p className="text-sm leading-relaxed text-slate-600 max-w-xl">
              Unimos estratégia, eficiência e dados para estruturar processos de RH
              modernos, com parceria de verdade para crescer junto com cada cliente.
            </p>
          </motion.div>
        </div>

        {/* CARDS */}
        <motion.div
          variants={stagger}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 min-h-[260px] transition hover:shadow-md"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                Estratégia antes da contratação
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Não indicamos candidatos. Estruturamos processos completos de
                recrutamento para garantir eficiência, clareza e melhores decisões.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-200 p-8 min-h-[260px] shadow-sm"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                Decisões baseadas em dados
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                Utilizamos métricas e indicadores para melhorar contratação,
                retenção e performance. RH estratégico precisa ser orientado por
                dados.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 min-h-[260px] transition hover:shadow-md"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                Parceria de crescimento
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Crescemos junto com nossos clientes, estruturando processos que
                acompanham a evolução do negócio e fortalecem a cultura
                organizacional.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ======= BANNER NÚMEROS (COM BG) ======= */}
      <motion.div
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url(/bg-valores.png)" }} // ✅ coloque na pasta /public
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/55" />

        <motion.div
          className="relative z-10 mx-auto max-w-6xl px-6 py-36"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <motion.span
                variants={fadeUp}
                className="flex w-fit gap-2 items-center mb-6 px-4 py-1 text-xs rounded-full bg-blue-50/10 text-blue-200 border border-blue-300/20"
              >
                NUMEROS
              </motion.span>

              <motion.h3
                variants={fadeUp}
                className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white pr-10"
              >
                Resultados que comprovam nossa metodologia
              </motion.h3>
            </div>

            <motion.div
              variants={stagger}
              className="grid gap-8 sm:grid-cols-2"
            >
              {[
                { big: "+120", label: "processos seletivos conduzidos" },
                { big: "92%", label: "taxa de retenção após 6 meses" },
                { big: "+40", label: "empresas atendidas" },
                { big: "35%", label: "redução média no tempo de contratação" },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <div className="text-6xl font-semibold text-white">
                    {item.big}
                  </div>
                  <p className="mt-2 text-xl text-slate-200">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}