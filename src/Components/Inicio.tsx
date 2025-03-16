import React, { useState, useEffect, useRef } from "react";

// Importar los css
import "./Inicio.css";
import "./Nosotros.css";
import "./Industrias.css";
import "./Especialidades.css";
import "./Proceso.css";
import "./Novedades.css";
import "./Contactanos.css";
import "./Ubicanos.css";
import "./Datos.css";
import "./Footer.css";

import "bootstrap/dist/css/bootstrap.min.css";

// Importar las imágenes

// Incio
import Logo from "../Media/Image/Tinici.png"; // Importa la imagen del logo
import VideoFondo from "../Media/Video/Fondo.mp4"; // Importa el video

// Novedades
import novedadesImage1 from "../Media/Image/novedades1.jpg";
import novedadesImage2 from "../Media/Image/novedades2.jpg";
import novedadesImage3 from "../Media/Image/novedades3.jpg";

// Footer
import FooterLogo from "../Media/Image/T-Control.png"; // Importa la imagen

const Inicio: React.FC = () => {
  // Sección de card para Industrias

  const cards = [
    { id: 1, title: "Eléctrica", className: "Eléctrica" },
    { id: 2, title: "Redes", className: "Redes" },
    { id: 3, title: "Construcción", className: "Construcción" },
    { id: 4, title: "Agroindustria", className: "Agroindustria" },
    { id: 5, title: "Automatización", className: "Automatización" },
    { id: 6, title: "Seguridad", className: "Seguridad" },
  ];

  // Se duplica el arreglo tres veces para lograr un efecto infinito
  const duplicatedCards = [...cards, ...cards, ...cards];

  // Comenzamos en la posición central de la secuencia duplicada para poder retroceder y avanzar
  const initialIndex = cards.length;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  // Controla si la transición está habilitada (para reinicios sin efecto visual)
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Referencia al contenedor de la pista del carrusel
  const trackRef = useRef<HTMLDivElement>(null);

  // Función para avanzar una card (solo hacia adelante)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Función para retroceder una card manualmente mediante el botón "previo"
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? duplicatedCards.length - 1 : prevIndex - 1
    );
  };

  // Efecto para el auto-slide cada 4 segundos (4000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Efecto para el loop infinito:
  // Si el índice alcanza el final de la serie duplicada o se va demasiado atrás, se reinicia sin transición
  useEffect(() => {
    if (currentIndex >= duplicatedCards.length - cards.length) {
      setTransitionEnabled(false);
      setCurrentIndex((prevIndex) => prevIndex - cards.length);
    } else if (currentIndex < cards.length) {
      setTransitionEnabled(false);
      setCurrentIndex((prevIndex) => prevIndex + cards.length);
    } else {
      setTransitionEnabled(true);
    }
  }, [currentIndex, cards.length, duplicatedCards.length]);

  // Imagenes de Especialidades
  const specialties = [
    {
      title: "Internet de las Cosas (IoT)",
      image:
        "https://imgs.search.brave.com/bCpH0-SWojSChsIxkmXaWzNl6U5eLsEq-ztCPf_8Fgk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk2/MjY0MTU2L2VzL2Zv/dG8vc2lzdGVtYS1k/ZS1jb250cm9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/MXYwdUpaLWlEaHNk/cmwwcXlWNlk5WFZZ/Y3hVVFM4OWxyTUY2/MGV4RkxjPQ",
    },
    {
      title: "Seguridad Electrónica y Videovigilancia",
      image:
        "https://i.pinimg.com/736x/ba/88/6d/ba886d93692d803252e0e011d4a1dece.jpg",
    },
    {
      title: "Sistemas SCADA y Telemetría",
      image:
        "https://i.pinimg.com/736x/11/d7/51/11d751ec5e4a09002fcc031092d0cc53.jpg",
    },
    {
      title: "Electrónica Industrial",
      image:
        "https://i.pinimg.com/736x/8e/09/e2/8e09e239da850b7f1305803997874767.jpg",
    },
    {
      title: "Automatización Industrial",
      image:
        "https://i.pinimg.com/736x/a9/ec/99/a9ec99251ad0e8d13293e67174aece0e.jpg",
    },
    {
      title: "Instrumentación y Control",
      image:
        "https://i.pinimg.com/736x/c4/b1/95/c4b195ffd6bf9cde729a63f47ab1e23f.jpg",
    },
  ];

  // Novedades
  const novedadesData = [
    {
      fecha: "1 de Marzo, 2023",
      titulo:
        "Desarrollo de nuevos modelos en la industria de los Sistemas de Bombeo",
      img: novedadesImage1, // Reemplaza con tu imagen
    },
    {
      fecha: "18 de Julio, 2022",
      titulo:
        "Solución Avanzada de Seguridad Electrónica para Centros Logísticos",
      img: novedadesImage2,
    },
    {
      fecha: "7 de Abril, 2020",
      titulo:
        "Tablero general 3F+T, 60HZ con vista Lateral, Frontal y Frontal interior",
      img: novedadesImage3, // Usa la imagen importada
    },
  ];

  // Datos

  // State para almacenar el mensaje y el correo del usuario
  const [mensaje, setMensaje] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construimos el mailto con los datos ingresados
    const mailtoLink = `mailto:omarsm.1928@gmail.com?subject=Consulta%20desde%20la%20web&body=Mensaje:%20${encodeURIComponent(
      mensaje
    )}%0ACorreo%20del%20remitente:%20${encodeURIComponent(correo)}`;

    // Abrimos el cliente de correo
    window.location.href = mailtoLink;
  };

  return (
    // CONTENEDOR DE INICIO ---------------------------------------------------------------------------------------------------------------
    <div className="App">
      <div className="inicio-container Inicio">
        {/* Video de fondo */}
        <video autoPlay muted loop id="bg-video">
          <source src={VideoFondo} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        {/* Barra de Navegación */}
        <nav className="navbar navbar-expand-lg navbar-transparent barraNav">
          <div className="container-fluid navbar-custom CI">
            {/* Logo a la izquierda */}
            <a className="navbar-brand" href="#Inicio">
              <img src={Logo} alt="Logo" className="logo-img" />
            </a>

            {/* Botón de colapso en pantallas pequeñas */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menú colapsable */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link OpcionMenu a" href="#Nosotros">
                    Nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link OpcionMenu c" href="#Industrias">
                    Industrias
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link OpcionMenu b" href="#Especialidades">
                    Especialidades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link OpcionMenu d" href="#Novedades">
                    Novedades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link OpcionMenu e" href="#Contactanos">
                    Conecta!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Contenido principal */}
        <div className="contenido-inicio">
          <h1 className="tituloInicio">
            Bienvenido a <span className="marca">T-Control</span>
          </h1>
          <p className="ContInicio">
            Desarrollamos soluciones inteligentes para hacer que los sistemas
            industriales sean más eficientes, seguros y conectados
          </p>
          <button
            className="btn BServicios"
            onClick={() => (window.location.href = "#Especialidades")}
          >
            Servicios
          </button>
        </div>
      </div>

      {/* Sección Nosotros ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="nosotros" id="Nosotros">
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
                  automatización y control, potenciando la eficiencia, seguridad
                  y sostenibilidad en cada proceso.
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
                  Somos integridad, Calidad, Seguridad, Respeto al medio
                  ambiente y la innovación en cada proceso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Industrias ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="industrias" id="Industrias">
        <h2 className="industrias-titulo text-2xl font-semibold text-center">
          Industrias
        </h2>
        <p className="pIndustrias">
          Nos enorgullece ofrecer soluciones de vanguardia que transforman la
          manera en que las empresas operan y optimizan sus procesos, impulsando
          la eficiencia, la productividad y la seguridad.
        </p>
        <div className="carousel-container">
          {/* Botón para retroceder manualmente */}
          <button className="carousel-btn prev" onClick={prevSlide}>
            &#10094;
          </button>
          {/* Pista del carrusel */}
          <div
            className="carousel-track"
            ref={trackRef}
            style={{
              // Cada card tiene 250px de ancho y 20px de margen total (10px a cada lado)
              // Ajustamos el desplazamiento de acuerdo a la card completa (270px)
              transform: `translateX(-${currentIndex * 270}px)`,
              transition: transitionEnabled ? "transform 0.5s linear" : "none",
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div key={index} className={`cardIndustrias ${card.className}`}>
                {/* Título de la card con fondo semitransparente (configurable en CSS) */}
                <div className="card-title-industrias">{card.title}</div>
              </div>
            ))}
          </div>
          {/* Botón para avanzar manualmente */}
          <button className="carousel-btn next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>
      {/* Sección Especialidades ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="container my-5" id="Especialidades">
        <h2 className="text-center mb-4 tituloEspecialidades">
          Especialidades
        </h2>
        <br />
        <div className="row">
          {specialties.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="especialidades-card-unique">
                <div
                  className="especialidades-card-image-unique"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Capa oscura para resaltar el texto */}
                  <div className="overlay-dark-unique"></div>
                  <h3 className="especialidades-card-title-unique">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Sección Proceso ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="container SProceso" id="Proceso">
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
                <a href="#Datos" className="btn custom-btn-proceso">
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
                <a href="#Datos" className="btn custom-btn-proceso">
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
                Creamos soluciones tecnológicas a medida que optimizan procesos
                y resultados.
              </p>
              <br />
              <div className="d-flex justify-content-center mt-1">
                <a href="#Datos" className="btn custom-btn-proceso">
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
                <a href="#Datos" className="btn custom-btn-proceso">
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
      {/* Sección Novedades ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="novedades-section" id="Novedades">
        <div className="container text-center">
          {/* Título */}
          <h2 className="novedades-title">Novedades</h2>
          <br />
          {/* Subtítulo */}
          <p className="novedades-subtitle">
            Cada solución implementada refleja nuestro compromiso con la
            innovación tecnológica y la excelencia operativa.
          </p>

          {/* Contenedor de las tarjetas de novedades */}
          <div className="novedades-cards d-flex flex-wrap justify-content-center">
            {novedadesData.map((item, index) => (
              <div className="novedad-card" key={index}>
                <div className="novedad-image">
                  <img src={item.img} alt={item.titulo} />
                  {/* Div pequeño inferior */}
                  <div className="novedad-info">
                    <span className="novedad-fecha">{item.fecha}</span>
                    <h4 className="novedad-titulo">{item.titulo}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sección Contactanos ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="container my-5 Contactanos" id="Contactanos">
        <div className="text-center">
          <h1 className="HContactanos">Hablemos sobre tu proyecto</h1>
          <br />
          <br />
          <p className="pContactanos">
            Conéctese con nuestro equipo y empecemos a transformar su empresa
            con innovación y tecnología
          </p>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4 Contactanos-cards">
          {/* Card de WhatsApp */}
          <div className="card custom-card-Contactanos">
            <div className="card-body d-flex flex-column">
              {/* SVG de WhatsApp */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="icon"
              >
                <path
                  d="M438.957 19.477H73.043C32.766 19.477 0 52.244 0 92.52v246.961c0 40.276 32.766 73.043 73.043 73.043h28.663l.561 64.483a15.648 15.648 0 0 0 15.649 15.517 15.64 15.64 0 0 0 9.565-3.262l99.425-76.738h212.051c40.277 0 73.043-32.767 73.043-73.043V92.52c0-40.276-32.766-73.043-73.043-73.043zm41.739 320.005c0 23.015-18.724 41.739-41.739 41.739H221.569c-3.46 0-6.823 1.147-9.563 3.261l-78.711 60.75-.422-48.495c-.074-8.591-7.06-15.516-15.651-15.516H73.043c-23.015 0-41.739-18.724-41.739-41.739V92.52c0-23.015 18.724-41.739 41.739-41.739h365.915c23.015 0 41.739 18.724 41.739 41.739v246.962z"
                  fill="#222222"
                  opacity="1"
                />
              </svg>
              <h5 className="card-title-Contactanos text-center custom-title-Contactanos">
                WhatsApp
              </h5>
              <p className="card-text text-center custom-text-Contactanos">
                Responderemos tu mensaje a la brevedad posible
              </p>
              <div className="d-flex justify-content-center mt-1">
                <a
                  href="https://wa.me/51941956585"
                  className="btn custom-btn-Contactanos"
                >
                  Enviar Mensaje
                </a>
              </div>
            </div>
          </div>

          {/* Card de E-mail */}
          <div className="card custom-card-Contactanos">
            <div className="card-body d-flex flex-column">
              {/* Ícono de Gmail */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon"
              >
                <path
                  d="M 19 20.5 H 5 a 4.004 4.004 0 0 1 -4 -4 v -9 a 4.004 4.004 0 0 1 4 -4 h 14 a 4.004 4.004 0 0 1 4 4 v 9 a 4.004 4.004 0 0 1 -4 4 Z M 5 5.5 a 2.002 2.002 0 0 0 -2 2 v 9 a 2.002 2.002 0 0 0 2 2 h 14 a 2.002 2.002 0 0 0 2 -2 v -9 a 2.002 2.002 0 0 0 -2 -2 Z"
                  fill="#222222"
                />
                <path
                  d="M 12 13.434 a 4.993 4.993 0 0 1 -3.07 -1.055 L 2.386 7.29 A 1 1 0 0 1 3.614 5.71 l 6.544 5.09 a 2.995 2.995 0 0 0 3.684 0 l 6.544 -5.09 a 1 1 0 0 1 1.228 1.58 l -6.544 5.09 A 4.996 4.996 0 0 1 12 13.433 Z"
                  fill="#222222"
                />
              </svg>
              <h5 className="card-title-Contactanos text-center custom-title-Contactanos">
                E-mail
              </h5>
              <p className="card-text text-center custom-text-Contactanos">
                Estaremos leyendote por nuestro correo
              </p>
              <div className="d-flex justify-content-center mt-1">
                <a
                  href="mailto:tcontrolsac@gmail.com"
                  className="btn custom-btn-Contactanos"
                >
                  Enviar Correo
                </a>
              </div>
            </div>
          </div>

          {/* Card de Calendly */}
          <div className="card custom-card-Contactanos calendly">
            <div className="card-body d-flex flex-column">
              {/* Ícono de Calendly */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="icon calendly-icon"
              >
                <path
                  d="M56.562 17.372C56.246 12.117 51.858 8 46.573 8H44V6a2 2 0 0 0-4 0v2H24V6a2 2 0 0 0-4 0v2h-2.573c-5.286 0-9.674 4.117-9.989 9.372-.593 9.884-.582 19.91.033 29.799.312 5.022 4.335 9.045 9.357 9.357 5.033.313 10.102.469 15.171.469 5.068 0 10.138-.156 15.171-.469 5.022-.312 9.045-4.335 9.357-9.357.616-9.884.627-19.909.035-29.799zm-4.026 29.551a6.006 6.006 0 0 1-5.613 5.613c-9.902.615-19.944.615-29.846 0a6.006 6.006 0 0 1-5.613-5.613A241.309 241.309 0 0 1 11.147 24h41.707c.252 7.64.155 15.323-.318 22.923zM22 16a2 2 0 0 0 2-2v-2h16v2a2 2 0 0 0 4 0v-2h2.573c3.173 0 5.807 2.465 5.996 5.611.047.794.067 1.593.106 2.389h-41.35c.04-.796.059-1.595.106-2.389C11.62 14.465 14.253 12 17.427 12H20v2a2 2 0 0 0 2 2z"
                  fill="#222222"
                  opacity="1"
                />
              </svg>
              <h5 className="card-title-Contactanos text-center custom-title-Contactanos">
                Calendly
              </h5>
              <p className="card-text text-center custom-text-Contactanos">
                Agenda una reunión con nosotros
              </p>
              <div className="d-flex justify-content-center mt-1">
                <a
                  href="https://calendly.com/hersson-stewar-aefy/30min?month=2025-03"
                  className="btn custom-btn-Contactanos"
                >
                  Agendar Reunión
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Ubicanos ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="ubicanos-section py-5" id="Ubicanos">
        <div className="container">
          <h2 className="text-center mb-4 tituloUbicanos">Ubícanos</h2>
          <br />

          {/* Contenedor relativo para el mapa y el recuadro de contacto */}
          <div className="ubicanos-map-container">
            {/* Mapa en iframe */}
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592.103873250239!2d-80.62735437049088!3d-5.197512897716894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a107ddd0efae7%3A0xaeb976088d0ea599!2sPlaza%20de%20Armas%20de%20Piura!5e0!3m2!1ses!2spe!4v1741975395056!5m2!1ses!2spe"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>

            {/* Recuadro de información de contacto (overlay) */}
            <div className="ubicanos-contact-info">
              <h3 className="mb-3 Dub">Estamos en contacto</h3>
              <p className="mb-1 Tub">T-Control- Perú</p>
              <p className="mb-1 Tub">987 654 321</p>
              {/*<p className="mb-1 Tub">Perú</p>
            <p className="mb-3 Tub">tcontrolsac@gmail.com</p> */}
              <div className="ubicanos-social-icons">
                <a href="#!" aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#!" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#!" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#!" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sección Datos ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="datos-section" id="Datos">
        <div className="container d-flex flex-column align-items-center">
          {/* Título principal */}
          <h2 className="datos-title mb-4">Déjanos un mensaje</h2>

          {/* Contenedor con borde redondeado */}
          <div className="datos-container p-4 d-flex">
            <form onSubmit={handleSubmit} className="flex-grow-1">
              {/* Etiqueta "Comentanos" */}
              <h3 className="datos-subtitle mb-3">Comentanos</h3>

              {/* Textarea para el mensaje */}
              <div className="mb-3">
                <textarea
                  className="form-control datos-textarea"
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>

              {/* Sección de input de correo y botón */}
              <div className="d-flex align-items-center datos-email-container">
                <input
                  type="email"
                  className="form-control datos-email-input"
                  placeholder="correo@mail.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
                <button type="submit" className="btn datos-btn ms-2">
                  Notifícame
                </button>
              </div>
            </form>
            {/* SVG Icono de mensaje */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="datos-icon ms-4"
              style={{ width: "30%" }}
            >
              <path
                d="M28 2H4C2.346 2 1 3.346 1 5v16c0 1.654 1.346 3 3 3h3v5a1.001 1.001 0 0 0 1.625.781L15.851 24H28c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3zM16 16H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2zm8-4H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z"
                fill="#222222"
                opacity="1"
                data-original="#000000"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      {/* Footer ----------------------------------------------------------------------------------------------------------------------*/}
      <footer className="footer" id="Footer">
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
            <p>T-Control EIRL, Piura, Perú</p>
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
                "Mantenimiento industrial",
                "Alarmas de seguridad",
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
            <h3>Sobre nosotros</h3>
            <ul>
              {["Misión", "Visión", "Nuestros Valores"].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="tControl2025">© 2025 T-Control</p>
          <p>Política Ambiental</p>
          <p>Política de Calidad</p>
          <p>Privacidad</p>
          <p>Certificado ISO 9001:2015 </p>
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
    </div>
  );
};

export default Inicio;
