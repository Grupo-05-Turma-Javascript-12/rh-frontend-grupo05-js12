import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="w-full bg-slate-950">
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* efeitos de fundo */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-80 w-152 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-md sm:p-12"
        >
          {/* conteúdo */}
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Sua empresa está crescendo.{" "}
                <span className="text-blue-200">Seu RH está preparado?</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Não espere problemas aparecerem para estruturar seu time.
                <br className="hidden sm:block" />A contratação certa hoje evita
                prejuízos amanhã.
              </p>

              {/* “prova” rápida */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Processo mais rápido
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Menos retrabalho
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Mais retenção
                </span>
              </div>
            </div>

            {/* botões */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-6 py-4 text-xl font-semibold text-white transition hover:bg-blue-400"
              >
                Quero organizar meu RH agora
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Agendar diagnóstico estratégico gratuito
              </a>

              <p className="mt-1 text-center text-xs text-slate-400 lg:text-center">
                Resposta em até 24h • Sem compromisso
              </p>
            </div>
          </div>

          {/* linha decorativa */}
          <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
