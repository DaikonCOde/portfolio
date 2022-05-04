// hooks
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
// components
import NavMenu from "../navMenu";
// styles
import { ContentHeader } from "./styles";
// icons
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

const listNav = [
  {
    label: '_hola',
    href: '/'
  },
  {
    label: '_sobre_mi',
    href: '/about-me'
  },
  {
    label: '_proyectos',
    href: '/projects'
  }
]

const HeaderMobile = () => {
  
  const [ isOpen, setIsOpen ] = useState(false);

  const handleMenu = () => {
    setIsOpen( !isOpen );
  }

  return (
    <ContentHeader>
      <div className="brand"> 
        <h2>alex-ocsa</h2>
      </div>

      <ul className="menu-desktop">
        {
          listNav.map( item => (
            <li key={ item.label }>
              <NavLink 
                to= {item.href}  
                className={({ isActive }) => isActive ? 'menu-active' : undefined} 
              > 
                {item.label} 
              </NavLink>
            </li>
          ) )
        }
      </ul>

      <div className="menu-mobile" onClick={ handleMenu }>
        <i>
          {
            isOpen 
              ? <RiCloseLine />
              : <RiMenu3Fill /> 
          } 
        </i>
      </div>
      <AnimatePresence>
        {
          isOpen && (
            <NavMenu closeMenu= { () => setIsOpen(false) } listNav={ listNav } />
          )
        }
      </AnimatePresence>

    </ContentHeader>
  )
}

export default HeaderMobile