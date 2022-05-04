import { ContentHome } from "./styles";

import { motion } from "framer-motion";
import MiCV from '../../assets/mi-cv.pdf';

const Home = () => {

  console.log(MiCV)

  return (
    <ContentHome 
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:1}}
      exit={{ opacity: 0 }}
    >
      <div className="hero">
        <h4 className="label white">
          Hola. Yo soy 
        </h4>
        <h1 className="title white">
          Alex Ocsa
        </h1>
        <span className="specialization green">
          &gt; Front-end developer
        </span>
        <span className="content-gradient">
          <span className="first"></span>
          <span className="second"></span>
        </span>
      </div>
      <div className="download-cv">
        <span className="comment">// descarga mi CV</span>
        <p className="code">
          <span className="const">const </span>
          <span className="name">downloadMyCV</span>
          <span className="equal"> = </span>
          <a href={ MiCV } download='mi-cv' target="_blank" rel="noopener noreferrer" className="value">"CV.pdf"</a>
        </p>
      </div>
    </ContentHome>
  )
}

export default Home