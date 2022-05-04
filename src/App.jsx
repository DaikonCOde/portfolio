import { HashRouter } from 'react-router-dom';
import Theme from './theme';

import Header from './components/header';
import Footer from './components/footer';

import Router from './router';

function App() {
  
  return (
    <HashRouter>
      <Theme>
      <div className="content-app">
        <Header />
        <Router />
        <Footer />
      </div>
      </Theme>
    </HashRouter>
  )
}

export default App
