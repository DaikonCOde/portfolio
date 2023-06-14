import { ContentHome } from "./styles";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MiCV from "../../assets/CV-Alex-Ocsa-FS.pdf";
import Code from "../../assets/code_hook_fetch.jpg";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 1000, transition: { delay: 0.8 } }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0, x: -1000, transition: { duration: 1 } }}
      key={location.pathname}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title> Alex Ocsa </title>
      </Helmet>
      <ContentHome>
        <div className="hero">
          <h4 className="label white">Hola. Yo soy</h4>
          <h1 className="title white">Alex Ocsa</h1>
          <span className="specialization green">
            &gt; Full-Stack developer
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
            <a
              href={MiCV}
              download="mi-cv"
              target="_blank"
              rel="noopener noreferrer"
              className="value"
            >
              downloadMyCV()
            </a>
          </p>
        </div>
      </ContentHome>
    </motion.div>
  );
};

export default Home;
