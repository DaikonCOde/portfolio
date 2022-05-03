import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../views/home';
import Projects from '../views/projects';

const Router = () => {
  return (
    <div className="content-views">
      <AnimatePresence>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/projects' element={ <Projects /> } />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Router;