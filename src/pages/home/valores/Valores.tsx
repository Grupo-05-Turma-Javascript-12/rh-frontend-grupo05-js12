export default function Valores() {
  return (
    <section className="w-full bg-slate-50" id="valores">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              VALORES
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
              Valores que guiam a Elevva
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="lg:mg-0 leading-relaxed text-slate-600">
              Unimos estratégia, eficiência e dados para estruturar processos de
              RH modernos, com parceria de verdade para crescer junto com cada
              cliente.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 min-h-65 transition hover:shadow-md">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                Estratégia antes da contratação
              </h3>

              <p className="mt-4 lg:mg-0 leading-relaxed text-slate-600">
                Não indicamos candidatos. Estruturamos processos completos de
                recrutamento para garantir eficiência, clareza e melhores
                decisões.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-300 p-8 min-h-65 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                Decisões baseadas em dados
              </h3>

              <p className="mt-4 lg:mg-0 leading-relaxed text-slate-700">
                Utilizamos métricas e indicadores para melhorar contratação,
                retenção e performance. RH estratégico precisa ser orientado por
                dados.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 min-h-65 transition hover:shadow-md">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                Parceria de crescimento
              </h3>

              <p className="mt-4 lg:mg-0 leading-relaxed text-slate-600">
                Crescemos junto com nossos clientes, estruturando processos que
                acompanham a evolução do negócio e fortalecem a cultura
                organizacional.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/public/bg-valores.png')",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-36">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-400">
                NUMEROS
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
                Resultados que comprovam nossa metodologia
              </h3>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="text-6xl font-semibold text-white">+120</div>
                <p className="mt-2 lg:mg-0 text-slate-300">
                  processos seletivos conduzidos
                </p>
              </div>

              <div>
                <div className="text-6xl font-semibold text-white">92%</div>
                <p className="mt-2 lg:mg-0 text-slate-300">
                  taxa de retenção após 6 meses
                </p>
              </div>

              <div>
                <div className="text-6xl font-semibold text-white">+40</div>
                <p className="mt-2 lg:mg-0 text-slate-300">
                  empresas atendidas
                </p>
              </div>

              <div>
                <div className="text-6xl font-semibold text-white">35%</div>
                <p className="mt-2 lg:mg-0 text-slate-300">
                  redução média no tempo de contratação
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
