import React from "react";
import "./Especialidades.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Especialidades: React.FC = () => {
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

  return (
    <section className="containerEspecialidades my-5 ContenedorEspecialidades">
      <h2 className="text-center mb-4 tituloEspecialidades">Especialidades</h2>
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
  );
};

export default Especialidades;
