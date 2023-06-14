import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import { ContentAboutMe } from "./styles";
import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import {
  SiWebpack,
  SiStyledcomponents,
  SiGit,
  SiMysql,
  SiTypescript,
  SiMongodb,
  SiJest,
  SiSpring,
} from "react-icons/si";
import { FiFigma, FiFramer } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { useLocation } from "react-router-dom";

const skills = [
  {
    icon: RiReactjsLine,
    label: "ReactJS",
    id: 988123,
  },
  {
    icon: DiJavascript1,
    label: "JavaScript",
    id: 761232,
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
    id: 12343254635653,
  },
  {
    icon: TbBrandNextjs,
    label: "Next JS",
    id: 2454653673,
  },
  {
    icon: GrNode,
    label: "NodeJS",
    id: 4123332,
  },
  {
    icon: SiJest,
    label: "Jest",
    id: 8234245,
  },
  {
    icon: SiWebpack,
    label: "Webpack",
    id: 6123441,
  },
  {
    icon: SiStyledcomponents,
    label: "Styled Components",
    id: 7123093,
  },
  {
    icon: FiFigma,
    label: "Figma",
    id: 79123233,
  },
  {
    icon: FiFramer,
    label: "Framer Motion",
    id: 89912344,
  },
  {
    icon: SiGit,
    label: "Git",
    id: 1254675745746,
  },
  {
    icon: FaJava,
    label: "Java",
    id: 285824598245,
  },
  {
    icon: SiSpring,
    label: "Spring Boot",
    id: 46356334,
  },
  {
    icon: SiMysql,
    label: "MySQL",
    id: 78732452524,
  },
  {
    icon: SiMongodb,
    label: "Mongo DB",
    id: 8452452,
  },
];

const AboutMe = () => {
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
        <title>Sobre mi | Alex Ocsa </title>
      </Helmet>

      <ContentAboutMe>
        <h4 className="label-section">_sobre_mi</h4>
        <div className="personal-info">
          <span className="label-comment">// información personal</span> <br />
          <br />
          <span className="comment">
            Mi nombre es <strong>Alex Ocsa Lopez</strong>, tengo 21 años y
            actualmente resido en Perú. Llevo estudiando programación durante
            tres años, tiempo en el cual he adquirido conocimientos en diversas
            tecnologías. Sin embargo, mi favorita es <strong>JavaScript</strong>{" "}
            debido a su sintaxis amigable y a la gran versatilidad que ofrece.{" "}
            <br />
            <br />
            Además, cuento con experiencia enel desarrollo de aplicaciones
            backend utilizando <strong>Node.js y Java.</strong>
            También tengo conocimientos en bases de datos relacionales como no
            relacionales, lo que me permite diseñar y administrar sistemas de
            almacenamiento eficientes y escalables. <br />
            <br />
            Recientemente, he empezado a incursionar en tecnologías cloud, lo
            cual me ha permitido adquirir habilidades en la implementación y
            administración de servicios en la nube. Estoy emocionado por seguir
            aprendiendo y explorar más sobre esta área en constante evolución.
          </span>
        </div>
        <div className="skills">
          <span className="label-comment">// skills</span>
          <br />
          <br />
          <div className="contentSkills">
            {skills.map(({ icon: Icon, label, id }) => (
              <div className="skill" key={id}>
                <i>
                  <Icon />
                </i>
                <span className="label-skill">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentAboutMe>
    </motion.div>
  );
};

export default AboutMe;
