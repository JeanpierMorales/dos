import React from "react";
import "./Novedades.css";
import novedadesImage1 from "../Media/Image/novedades1.jpg";
import novedadesImage2 from "../Media/Image/novedades2.jpg";
import novedadesImage3 from "../Media/Image/novedades3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Novedades: React.FC = () => {
  // Aquí tienes un arreglo de “novedades” como ejemplo
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

  return (
    <section className="novedades-section">
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
  );
};

export default Novedades;
