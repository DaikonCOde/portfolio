import React from 'react'
import {Helmet} from "react-helmet";
import { motion } from 'framer-motion'

import { ContentAboutMe } from './styles';
import { RiReactjsLine } from 'react-icons/ri';
import { DiJavascript1 } from 'react-icons/di'
import { SiWebpack, SiStyledcomponents, SiGit } from 'react-icons/si';
import { FiFigma, FiFramer } from 'react-icons/fi';
import { GrNode } from 'react-icons/gr'


const skills = [
  {
    icon: RiReactjsLine,
    label: 'ReactJS',
    id: 988123
  },
  {
    icon: DiJavascript1,
    label: 'JavaScript',
    id: 761232
  },
  {
    icon: GrNode,
    label: 'NodeJS',
    id: 4123332
  },
  {
    icon: SiWebpack,
    label: 'Webpack',
    id: 6123441
  },
  {
    icon: SiStyledcomponents,
    label: 'Styled Components',
    id: 7123093
  },
  {
    icon: FiFigma,
    label: 'Figma',
    id: 79123233
  },
  {
    icon: FiFramer,
    label: 'Framer Motion',
    id: 89912344
  },
  {
    icon: SiGit,
    label: 'Git',
    id: 89912344
  },
]

const AboutMe = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sobre mi | Alex Ocsa </title>
      </Helmet>

      <ContentAboutMe
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration:1, delay: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <h4 className="label-section">_sobre_mi</h4>
        <div className="personal-info">
          <span className="label-comment">// información personal</span> <br /><br />
          <span className="comment">
            Mi nombre es <strong>Alex Ocsa Lopez</strong> tengo 20 años, y actualmente resido en Perú, llevo estudiando programación por dos años, en los cuales aprendi varias tecnologías más mi favorita fue <strong>JavaScript</strong> tanto por su sintaxis tan amigable como por la gran versatilidad que esta tiene. <br />
            Me especializo en front-end con la librería de <strong>React JS</strong>. 
          </span>
        </div>
        <div className="skills">
          <span className="label-comment">// skills</span><br /><br />
          <div className="contentSkills">
            {
              skills.map( ({ icon: Icon, label, id }) => (
                <div className="skill" key={ id } >
                  <i>
                    <Icon />
                  </i>
                  <span className='label-skill'>{label}</span>
                </div>
              ) )
            }

          </div>
        </div>
      </ContentAboutMe>



    </>
  )
}

export default AboutMe