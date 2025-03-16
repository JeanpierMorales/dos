import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de tenerlo en tu proyecto
import "./Datos.css";

const Datos: React.FC = () => {
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
    <section className="datos-section">
      <div className="container d-flex flex-column align-items-center">
        {/* Título principal */}
        <h2 className="datos-title mb-4">Déjanos un mensaje</h2>

        {/* Contenedor con borde redondeado */}
        <div className="datos-container p-4">
          <form onSubmit={handleSubmit}>
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
                placeholder="name@mail.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
              <button type="submit" className="btn datos-btn ms-2">
                Notifícame
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Datos;
