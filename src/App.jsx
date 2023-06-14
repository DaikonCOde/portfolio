import { BrowserRouter } from "react-router-dom";
import Theme from "./theme";

import Header from "./components/header";
import Footer from "./components/footer";

import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <div className="content-app">
          <Header />
          <Router />
          <Footer />
        </div>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
