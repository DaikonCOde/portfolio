import React from 'react'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

import { ContentProjects } from './styles';

const listProjects = [
  {
    label: 'ui-animations',
    photo: 'image.jpge',
    description: 'Lorem ipsum dolor sit amet. ipsum dolor sit amet. sit amet. ipsum dolor sit amet. sit amet.',
    href: '/',
    technology: 'React',
    id: 1
  },
  {
    label: 'ui-animations',
    photo: 'image.jpge',
    description: 'Lorem ipsum dolor sit amet. ipsum dolor sit amet. sit amet. ipsum dolor sit amet. sit amet.',
    href: '/',
    technology: 'React',
    id: 2
  },
  {
    label: 'ui-animations',
    photo: 'image.jpge',
    description: 'Lorem ipsum dolor sit amet. ipsum dolor sit amet. sit amet. ipsum dolor sit amet. sit amet.',
    href: '/',
    technology: 'React',
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
      <ContentProjects>
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
                    <img src="" alt="" />
                  </div>
                <div className="content-info">
                  <p className="description">
                    {project.description}
                  </p>
                  <Link to={ project.href } target='_blank' className='view-project' >
                    ver-proyecto
                  </Link>
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