import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MovieApp from "../../assets/movie-app.png";
import WeatherApp from "../../assets/weather-app.png";
import Ecommerce from "../../assets/darly-store.png";

import { ContentProjects } from "./styles";

const listProjects = [
  {
    label: "web-de-películas",
    photo: MovieApp,
    description:
      "Desarrolle una web donde puedes encontrar un sin fin de peliculas en tendencia. Para esto utilize la Api Rest de THE MOVIE DB",
    href: "https://eflix-movies.netlify.app/",
    technology: "React, Redux",
    id: 1,
  },
  {
    label: "web-de-clima",
    photo: WeatherApp,
    description:
      "Proyecto realizado para mi certificación en el manejo de datos con JavaScript, este fue uno de mis primeros proyectos.",
    href: "https://weather-app-for-me.netlify.app/",
    technology: "Vanilla JS",
    id: 2,
  },
  {
    label: "e-commerce",
    photo: Ecommerce,
    description:
      "Tienda virtual con base de datos en firebase, con inicio de sesión por roles, tambien se utilizo un manejador de estado como Redux.",
    href: "https://darly.store",
    technology: "React, firebase",
    id: 3,
  },
];

const Projects = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 1000, transition: { delay: 0.2 } }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0, x: -1000, transition: { duration: 0.8 } }}
      key={location.pathname}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Proyectos | Alex Ocsa </title>
      </Helmet>
      <ContentProjects>
        <h4 className="label-section">_proyectos</h4>

        <div className="listProjects">
          {listProjects.map((project) => (
            <div className="project" key={project.id}>
              <p className="top">
                <span className="number-project">Proyecto {project.id}</span>
                <span className="comment"> // {project.label} </span>
              </p>
              <div className="card">
                <div className="content-img">
                  <img src={project.photo} alt={project.label} />
                  <span className="technology">{project.technology}</span>
                </div>
                <div className="content-info">
                  <p className="description">{project.description}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    className="view-project"
                  >
                    ver-proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentProjects>
    </motion.div>
  );
};

export default Projects;
