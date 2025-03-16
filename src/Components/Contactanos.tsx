import React from "react";
import "./Contactanos.css"; // Asegúrate de importar los estilos desde el archivo Contactanos.css
import "bootstrap/dist/css/bootstrap.min.css";

const Contactanos: React.FC = () => {
  return (
    <section className="container my-5 Contactanos">
      <div className="text-center">
        <h1 className="HContactanos">Hablemos sobre tu proyecto</h1>
        <br />
        <br />
        <p className="pContactanos">
          Conéctese con nuestro equipo y empecemos a transformar su empresa con
          innovación y tecnología
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
              <a href="#" className="btn custom-btn-Contactanos">
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
              <a href="#" className="btn custom-btn-Contactanos">
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
              <a href="#" className="btn custom-btn-Contactanos">
                Agendar Reunión
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactanos;
