import React, { useState, useEffect, useRef } from "react";
import "./Industrias.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Componente funcional para el carrusel de Industrias
const Industrias: React.FC = () => {
  // Arreglo original de cards
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

  return (
    <section className="industrias">
      <h2 className="industrias-titulo">Industrias</h2>
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
  );
};

export default Industrias;
