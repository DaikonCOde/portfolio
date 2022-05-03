// hooks
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// components
import NavMenu from "../navMenu";
// styles
import { ContentHeader } from "./styles";
// icons
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri'

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
      <div className="menu" onClick={ handleMenu }>
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
            <NavMenu closeMenu= { () => setIsOpen(false) } />
          )
        }
      </AnimatePresence>

    </ContentHeader>
  )
}

export default HeaderMobile