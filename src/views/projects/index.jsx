import React from 'react'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MovieApp from '../../assets/movie-app.png';
import WeatherApp from '../../assets/weather-app.png';
import Ecommerce from '../../assets/darly-store.png';


import { ContentProjects } from './styles';

const listProjects = [
  {
    label: 'web-de-películas',
    photo: MovieApp,
    description: 'Desarrolle una web donde puedes encontrar un sin fin de peliculas en tendencia. Para esto utilize la Api Rest de THE MOVIE DB',
    href: 'https://eflix-movies.netlify.app/',
    technology: 'React, Redux',
    id: 1
  },
  {
    label: 'web-de-clima',
    photo: WeatherApp,
    description: 'Proyecto realizado para mi certificación en el manejo de JS, este fue uno de mis primeros proyectos.',
    href: 'https://weather-app-for-me.netlify.app/',
    technology: 'Vanilla JS',
    id: 2
  },
  {
    label: 'ecommerce',
    photo: Ecommerce,
    description: 'Tienda virtual con base de datos en firebase, con inicio de sesión por roles, tambien se utilizo un manejador de estado como Redux.',
    href: 'https://darly.store',
    technology: 'React, firebase',
    id: 3
  }
]


const Projects = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Proyectos | Alex Ocsa </title>
      </Helmet>
      <ContentProjects
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration:1, delay: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <h4 className="label-section">_proyectos</h4>

        <div className="listProjects">
          {
            listProjects.map(project => (
              <div className="project" key={project.id}>
                <p className='top'>
                  <span className='number-project'>Proyecto {project.id}</span>
                  <span className="comment">  // {project.label} </span>
                </p>
                <div className="card">
                  <div className="content-img">
                    <img src={project.photo} alt={project.label} />
                    <span className="technology">{project.technology}</span>
                  </div>
                  <div className="content-info">
                    <p className="description">
                      {project.description}
                    </p>
                    <a href={ project.href } target='_blank' className='view-project' >
                      ver-proyecto
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </ContentProjects>
    </>
  )
}

export default Projects