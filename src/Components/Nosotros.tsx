import React from "react";
import "./Nosotros.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Nosotros: React.FC = () => {
  return (
    <section className="nosotros">
      <h2 className="nosotros-titulo">Nosotros</h2>
      <br />
      <br />

      <p className="nosotros-subtitulo">
        Somos el aliado estratégico que integra automatización, ingeniería y
        telecomunicaciones para impulsar el crecimiento sostenible de tu
        industria.
      </p>

      <div className="nosotros-cards">
        {/* Misión */}
        <div className="cardNosotros">
          <div className="card-inner">
            <div className="card-front mision bordeCard"></div>
            <div className="card-back">
              <p className="card-text-Nosotros">
                Revolucionamos la industria con soluciones integrales en
                automatización y control, potenciando la eficiencia, seguridad y
                sostenibilidad en cada proceso.
              </p>
            </div>
          </div>
        </div>

        {/* Visión */}
        <div className="cardNosotros">
          <div className="card-inner">
            <div className="card-front vision bordeCard"></div>
            <div className="card-back">
              <p className="card-text-Nosotros">
                Ser el referente nacional en ingeniería y automatización,
                marcando el camino hacia un futuro industrial inteligente y
                transformador
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="cardNosotros">
          <div className="card-inner">
            <div className="card-front valores bordeCard"></div>
            <div className="card-back">
              <p className="card-text-Nosotros">
                Somos integridad, Calidad, Seguridad, Respeto al medio ambiente
                y la innovación en cada proceso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
