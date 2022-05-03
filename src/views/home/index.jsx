import { ContentHome } from "./styles"

const Home = () => {
  return (
    <ContentHome>
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
      <div className="find-me">
        <span className="comment">// descarga mi CV</span>
        <p className="code">
          <span className="const">const </span>
          <span className="name">downloadMyCV</span>
          <span className="equal"> = </span>
          <span className="value">"CV.pdf"</span>
        </p>
      </div>
    </ContentHome>
  )
}

export default Home