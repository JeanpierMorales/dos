import React from "react";
import "./Ubicanos.css"; // Importar tu CSS personalizado
import "bootstrap/dist/css/bootstrap.min.css";

// Asegúrate de tener Bootstrap importado en tu proyecto (por ejemplo, en tu index.tsx o App.tsx)

const Ubicanos: React.FC = () => {
  return (
    <section className="ubicanos-section py-5">
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
  );
};

export default Ubicanos;
