import React from "react";
import "./SobreEmpresa.css";

const SobreEmpresa: React.FC = () => {
  return (
    <section className="sobre-container" id="sobreempresa">
      <div className="sobre-content">

        <span className="sobre-badge">Sobre a ELEVVA</span>

        <h2 className="sobre-titulo">
          RH estratégico, simples e digital.
        </h2>

        <p className="sobre-descricao">
          A ELEVVA nasceu para ajudar pequenas empresas a crescerem com estrutura.
      Sabemos que muitos CEOs enfrentam dificuldades para contratar as pessoas certas, organizar processos internos e manter conformidade trabalhista — tudo isso enquanto precisam cuidar da operação e das vendas.
      Nossa missão é simplificar o RH, digitalizar processos e transformar contratação em estratégia de crescimento.
      Não somos apenas recrutamento.
      Somos estrutura, clareza e escala para o seu negócio.

        </p>

        <div className="sobre-cards">
          <div className="card">
            <h3>Missão</h3>
            <p>
              Conectar empresas aos melhores talentos de forma estratégica,
              ágil e humanizada.
            </p>
          </div>

          <div className="card">
            <h3>Visão</h3>
            <p>
              Ser referência nacional em soluções digitais de RH para
              pequenas empresas.
            </p>
          </div>

          <div className="card">
            <h3>Valores</h3>
            <p>
               Estratégia antes da contratação.

            Não indicamos candidatos, estruturamos processos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SobreEmpresa;