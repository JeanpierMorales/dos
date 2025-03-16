import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Actividad.css";

interface Card {
  id: number;
  title: string;
  content: string;
}

const cards: Card[] = [
  { id: 1, title: "Card 1", content: "Contenido de la Card 1" },
  { id: 2, title: "Card 2", content: "Contenido de la Card 2" },
  { id: 3, title: "Card 3", content: "Contenido de la Card 3" },
  { id: 4, title: "Card 4", content: "Contenido de la Card 4" },
  { id: 5, title: "Card 5", content: "Contenido de la Card 5" },
  { id: 6, title: "Card 6", content: "Contenido de la Card 6" },
];

// Función para agrupar las cards en slides de 3 elementos
const chunkArray = (array: Card[], chunkSize: number): Card[][] => {
  const result: Card[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const slides = chunkArray(cards, 3);

const Actividad: React.FC = () => {
  return (
    <div
      id="cardCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      {/* Indicadores del carrusel */}
      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
            aria-current={idx === 0 ? "true" : undefined}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      {/* Contenido del carrusel */}
      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
            key={idx}
          >
            <div className="cards-container d-flex justify-content-around">
              {slide.map((card) => (
                <div className="card custom-card" key={card.id}>
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Botones de control */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#cardCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#cardCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default Actividad;
