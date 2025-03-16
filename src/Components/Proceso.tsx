import React from "react";
import "./Proceso.css"; // Asegúrate de importar los estilos desde el archivo Proceso.css
import "bootstrap/dist/css/bootstrap.min.css";

const Proceso: React.FC = () => {
  return (
    <section className="container SProceso">
      <div className="text-center">
        <p className="pProceso">
          El primer paso hacia la transformación tecnológica de tu empresa
          comienza con un simple mensaje, estaremos esperando por ello...
        </p>
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-3 mt-4 Proceso-cards">
        {/* Card de Contacta */}
        <div className="card custom-card-Proceso">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title-Proceso text-center custom-title-Proceso">
              Contacta
            </h5>
            <br />
            <br />

            <p className="card-text text-center custom-text-Proceso">
              Contamos con profesionales expertos para transformar ideas en
              soluciones reales.
            </p>
            <br />
            <div className="d-flex justify-content-center mt-1">
              <a href="#" className="btn custom-btn-proceso">
                Vamos
              </a>
              <br />
            </div>
            {/* SVG en la parte inferior central de la tarjeta */}
            <div className="svg-icon-container">
              <svg
                className="svg-icon"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 25.465h13a1 1 0 1 0 0-2H10a1 1 0 1 0 0 2zM36 29.465H10a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zM36 35.465H10a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z"
                  fill="#222222"
                  opacity="1"
                  data-original="#000000"
                ></path>
                <path
                  d="m54.072 2.535-34.142-.07c-3.27 0-5.93 2.66-5.93 5.93v5.124l-8.07.017c-3.27 0-5.93 2.66-5.93 5.93v21.141c0 3.27 2.66 5.929 5.93 5.929H12v10a1 1 0 0 0 1.74.673l9.704-10.675 16.626-.068c3.27 0 5.93-2.66 5.93-5.929v-.113l5.26 5.786a1.002 1.002 0 0 0 1.74-.673v-10h1.07c3.27 0 5.93-2.66 5.93-5.929V8.465a5.937 5.937 0 0 0-5.928-5.93zM44 40.536a3.934 3.934 0 0 1-3.934 3.929l-17.07.07a1 1 0 0 0-.736.327L14 53.949v-8.414a1 1 0 0 0-1-1H5.93A3.934 3.934 0 0 1 2 40.606V19.465a3.935 3.935 0 0 1 3.932-3.93L15 15.516h.002l25.068-.052a3.934 3.934 0 0 1 3.93 3.93v21.142zm14-10.93a3.934 3.934 0 0 1-3.93 3.929H52a1 1 0 0 0-1 1v8.414l-5-5.5V19.395c0-3.27-2.66-5.93-5.932-5.93L16 13.514v-5.12a3.934 3.934 0 0 1 3.928-3.93l34.141.07h.002a3.934 3.934 0 0 1 3.93 3.93v21.142z"
                  fill="#222222"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Card de Genera una estrategia */}
        <div className="card custom-card-Proceso">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title-Proceso text-center custom-title-Proceso">
              Genera una estrategia
            </h5>
            <br />
            <p className="card-text text-center custom-text-Proceso">
              Definimos y planificamos un camino innovador para impulsar tu
              crecimiento.
            </p>
            <br />
            <div className="d-flex justify-content-center mt-1">
              <a href="#" className="btn custom-btn-proceso">
                Vamos
              </a>
            </div>
            {/* SVG en la parte inferior central de la tarjeta */}
            <div className="svg-icon-container">
              <svg
                className="svg-icon"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M448.8 0H320.267c-34.907 0-63.2 28.242-63.2 63.2v91.402l-45.199 60.265a14.999 14.999 0 0 0 12 24h224.934c34.847 0 63.199-28.351 63.199-63.199V63.199C512 28.352 483.648 0 448.8 0zm-64.269 190.668c-8.277 0-15-6.723-15-15 0-8.281 6.723-15 15-15 8.281 0 15 6.719 15 15 0 8.277-6.719 15-15 15zm0-48.2c-8.281 0-15-6.718-15-15 0-8.284 6.719-15 15-15 9.45 0 17.133-7.687 17.133-17.132 0-4.578-1.777-8.875-5.012-12.106-3.246-3.25-7.543-5.03-12.12-5.03-9.454 0-17.134 7.679-17.134 17.116 0 8.286-6.714 15.008-15 15.008-8.28 0-15-6.707-15-14.988v-.02c0-25.976 21.137-47.117 47.118-47.117 12.617 0 24.453 4.91 33.347 13.817 8.899 8.882 13.801 20.722 13.801 33.32.004 25.988-21.14 47.133-47.133 47.133zM288.133 273.133H63.199C28.352 273.133 0 301.484 0 336.332v112.469C0 483.648 28.352 512 63.2 512h128.534c34.907 0 63.2-28.242 63.2-63.2v-91.402l45.199-60.265a14.999 14.999 0 0 0-12-24zM127.469 439.699H79.266c-8.282 0-15-6.715-15-15s6.718-15 15-15h48.203c8.281 0 15 6.715 15 15s-6.719 15-15 15zm48.199-64.265H79.266c-8.282 0-15-6.715-15-15s6.718-15 15-15h96.402c8.281 0 15 6.714 15 15s-6.719 15-15 15zM15.004 238.867h160.66c8.285 0 15-6.715 15-15V202.93c0-52.621-42.633-95.285-95.238-95.332 29.672-.047 53.71-24.114 53.71-53.797C149.137 24.09 125.052 0 95.337 0c-29.715 0-53.8 24.09-53.8 53.8 0 29.684 24.038 53.75 53.71 53.798-52.61.047-95.242 42.71-95.242 95.332v20.937c0 8.285 6.715 15 15 15zM416.758 380.73c29.672-.046 53.71-24.113 53.71-53.796 0-29.715-24.085-53.801-53.796-53.801-29.715 0-53.8 24.086-53.8 53.8 0 29.684 24.038 53.75 53.71 53.797-52.61.047-95.246 42.708-95.246 95.329V497c0 8.285 6.719 15 15 15H497c8.285 0 15-6.715 15-15v-20.937c0-52.622-42.633-95.286-95.242-95.333zm0 0"
                  fill="#222222"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Card de Desarrolla */}
        <div className="card custom-card-Proceso">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title-Proceso text-center custom-title-Proceso">
              Desarrolla
            </h5>
            <br />
            <br />
            <p className="card-text text-center custom-text-Proceso">
              Creamos soluciones tecnológicas a medida que optimizan procesos y
              resultados.
            </p>
            <br />
            <div className="d-flex justify-content-center mt-1">
              <a href="#" className="btn custom-btn-proceso">
                Vamos
              </a>
            </div>
            {/* SVG en la parte inferior central de la tarjeta */}
            <div className="svg-icon-container">
              <svg
                className="svg-icon"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M486.918 241c-3.569-56.163-27.148-108.469-67.298-148.62C379.469 52.23 327.163 28.651 271 25.082V0h-30v25.082C184.837 28.651 132.531 52.23 92.38 92.38 52.23 132.531 28.651 184.837 25.082 241H0v30h25.082c3.569 56.163 27.148 108.469 67.298 148.62 40.151 40.15 92.457 63.729 148.62 67.298V512h30v-25.082c56.163-3.57 108.469-27.148 148.62-67.298 40.15-40.151 63.729-92.457 67.298-148.62H512v-30zM241 55.16v39.551C163.63 101.848 101.848 163.63 94.711 241H55.16C62.492 141.882 141.882 62.492 241 55.16zm0 401.68C141.882 449.508 62.492 370.118 55.16 271h39.551C101.848 348.37 163.63 410.152 241 417.289zm15-68.861c-72.773 0-131.979-59.205-131.979-131.979S183.227 124.021 256 124.021 387.979 183.227 387.979 256 328.773 387.979 256 387.979zm15 68.861v-39.551C348.37 410.152 410.152 348.37 417.289 271h39.551c-7.332 99.118-86.722 178.508-185.84 185.84zM417.289 241C410.152 163.63 348.37 101.848 271 94.711V55.16c99.118 7.332 178.508 86.722 185.84 185.84z"
                  fill="#222222"
                  opacity="1"
                  data-original="#000000"
                ></path>
                <path
                  d="M256 156.617c-54.8 0-99.383 44.583-99.383 99.383S201.2 355.383 256 355.383 355.383 310.8 355.383 256 310.8 156.617 256 156.617zm-6.735 142.08-40.105-40.105 21.213-21.213 18.893 18.893 32.363-32.362 21.213 21.213z"
                  fill="#222222"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Card de Escala */}
        <div className="card custom-card-Proceso">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title-Proceso text-center custom-title-Proceso">
              Escala
            </h5>
            <br />
            <br />
            <p className="card-text text-center custom-text-Proceso">
              Impulsamos el crecimiento de capacidades y mercados de forma
              sostenible.
            </p>
            <br />
            <div className="d-flex justify-content-center mt-1">
              <a href="#" className="btn custom-btn-proceso">
                Vamos
              </a>
            </div>
            {/* SVG en la parte inferior central de la tarjeta */}
            <div className="svg-icon-container">
              <svg
                className="svg-icon"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.67 40.17 36 24.47l.91 1.59a1 1 0 0 0 1.83-.24l1-3.86a1 1 0 0 0-.7-1.23l-3.86-1a1 1 0 0 0-1.13 1.46l.95 1.55-27.33 15.7Z"
                  fill="#222222"
                  opacity="1"
                  data-original="#000000"
                ></path>
                <path
                  d="M60 24h-6V4a1 1 0 0 0-1.47-.88l-13 7a1 1 0 0 0 0 1.78L52 17.79V24h-6a1 1 0 0 0-1 1v9H32a1 1 0 0 0-1 1v8H18a1 1 0 0 0-1 1v6H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1ZM42.22 10.94 52 5.67v9.9ZM59 59H5v-7h13a1 1 0 0 0 1-1v-6h13a1 1 0 0 0 1-1v-8h13a1 1 0 0 0 1-1v-9h12Z"
                  fill="#222222"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proceso;
