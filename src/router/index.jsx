import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../views/home';
import Projects from '../views/projects';
import AboutMe from '../views/aboutMe';

const Router = () => {

  const location = useLocation();

  return (
    <div className="content-views">
      <AnimatePresence>
        <Routes  location={location} key={location.pathname}>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/projects' element={ <Projects /> } />
          <Route exact path='/about-me' element={ <AboutMe /> } />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Router;