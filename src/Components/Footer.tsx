import React from "react";
import "./Footer.css";
import FooterLogo from "../Media/Image/T-Control.png"; // Importa la imagen

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="Footer-Titulo">
          Estamos listos para llevar tus proyectos al siguiente nivel.
        </h2>
      </div>
      <div className="footer-main">
        <div className="footer-section contact">
          <img
            src={FooterLogo} // Usa la imagen importada
            alt="T-Control Logo"
            className="footer-logo"
          />
          <br />
          <br />
          <p>T-Control E.I.R.L, Piura, Perú</p>
          <p>
            <a href="mailto:tcontrolsac@gmail.com">tcontrolsac@gmail.com</a>
          </p>
          <p>
            <a href="tel:+51941956585">+51 941956585</a>
          </p>
          <br />
          <div className="social-icons">
            <a href="mailto:tcontrolsac@gmail.com" className="social-icon">
              {/* Icono de Email */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 512 512"
              >
                <path
                  fill-rule="evenodd"
                  d="M256 512C114.841 512 0 397.159 0 256S114.841 0 256 0s256 114.841 256 256-114.841 256-256 256zm132.758-166.069a5.732 5.732 0 0 0 5.725-5.725V179.489l-130.25 103.432c-2.41 1.915-5.323 2.872-8.234 2.872s-5.823-.958-8.234-2.872L117.516 179.489v160.717a5.732 5.732 0 0 0 5.725 5.725zm-19.96-179.862L256 255.644l-112.799-89.575zm52.168 5.725v168.414c0 17.759-14.449 32.208-32.208 32.208H123.241c-17.76 0-32.207-14.449-32.207-32.208V171.794c0-17.759 14.448-32.207 32.207-32.207h265.517c17.759-.001 32.208 14.448 32.208 32.207z"
                  clip-rule="evenodd"
                  fill="#fff"
                  opacity="1"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com" className="social-icon">
              {/* Icono de Facebook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 155.139 155.139"
              >
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  style={{ fill: "#fff" }}
                  opacity="1"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/tcontroleirl/"
              className="social-icon"
            >
              {/* Icono de LinkedIn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                  fill="#fff"
                  opacity="1"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com" className="social-icon">
              {/* Icono de Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 55 55"
              >
                <path
                  d="M30 20.83c-5.06 0-9.17 4.11-9.17 9.17s4.11 9.18 9.17 9.18 9.18-4.12 9.18-9.18-4.12-9.17-9.18-9.17z"
                  fill="#fff"
                  opacity="1"
                />
                <path
                  d="M43.84 5H16.16C10.01 5 5 10.01 5 16.16v27.68C5 50 10.01 55 16.16 55h27.68C50 55 55 50 55 43.84V16.16C55 10.01 50 5 43.84 5zM30 46.2c-8.93 0-16.2-7.27-16.2-16.2S21.07 13.81 30 13.81 46.2 21.07 46.2 30 38.93 46.2 30 46.2zm16.54-29.45c-1.89 0-3.43-1.53-3.43-3.42s1.54-3.43 3.43-3.43 3.43 1.54 3.43 3.43-1.54 3.42-3.43 3.42z"
                  fill="#fff"
                  opacity="1"
                />
              </svg>
            </a>
            <a href="https://wa.me/51941956585" className="social-icon">
              {/* Icono de WhatsApp */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0zm148.96 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section specialities">
          <h3>Especialidades</h3>
          <ul>
            {[
              "Electricidad Industrial",
              "Automatización Industrial",
              "Control de Procesos",
              "Sistemas SCADA",
              "Cableado Estructurado",
              "Instrumentación y Control",
              "Mantenimiento Industrial",
              "Alarmas de Seguridad",
              "Internet de las Cosas (IoT)",
              "Automatización de Edificios",
              "Integración de Sistemas Tecnológicos",
              "Sistemas de Bombeo",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-section industries">
          <h3>Industrias</h3>
          <ul>
            {[
              "Eléctrica",
              "Redes y Telecomunicaciones",
              "Construcción",
              "Agroindustria",
              "Automatización y Control Industrial",
              "Seguridad Electrónica y Videovigilancia",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-section about">
          <h3>About us</h3>
          <ul>
            {["Misión", "Visión", "Nuestros Valores"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="tControl2025">© 2025 T-Control</p>
        <p>Environmental Policy</p>
        <p>Quality Policy</p>
        <p>Privacy</p>
        <p>ISO 9001:2015 certificate</p>
      </div>

      {/* Flecha de scroll hacia arriba */}
      <button className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 24 24"
          style={{ transform: "rotate(270deg)" }} // Rotación de 90 grados
        >
          <path
            className="pathFlecha"
            d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z"
            fill="#222222"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
