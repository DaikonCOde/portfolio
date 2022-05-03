import { BrowserRouter } from 'react-router-dom';
import Theme from './theme';

import HeaderMobile from './components/headerMobile';

import Router from './router';

function App() {
  
  return (
    <BrowserRouter>
      <Theme>
      <div className="content-app">
        <HeaderMobile />
        <Router />
      </div>
      </Theme>
    </BrowserRouter>
  )
}

export default App
