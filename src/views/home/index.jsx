import { ContentHome } from "./styles";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MiCV from '../../assets/cv-alex-ocsa.pdf';
import Code from '../../assets/code-snippet.svg';

const Home = () => {

  console.log(MiCV)

  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title> Alex Ocsa </title>
      </Helmet>
      <ContentHome 
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration:1, delay: 0.2}}
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
          <img src={Code} alt="code snippet" className="code-snippet" />
        </div>
        <div className="download-cv">
          <span className="comment">// descarga mi CV</span>
          <p className="code">
            <span className="const">const </span>
            <span className="name">CV</span>
            <span className="equal"> = </span>
            <a href={ MiCV } download='mi-cv' target="_blank" rel="noopener noreferrer" className="value">downloadMyCV()</a>
          </p>
        </div>
      </ContentHome>
    </>
  )
}

export default Home