import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { ContentNavMenu } from "./styles"


const NavMenu = ({ closeMenu, listNav }) => {
  return (
    <ContentNavMenu
      as={ motion.div }
      initial= {{ height: 0 }}
      animate= {{ height: 'fit-content' }}
      exit= {{ height: 0 }}
      transition={{
        duration: 0.8
      }}
    >
      <ul>
        {
          listNav.map(item => (
            <li key={item.label}>
              <NavLink 
                to={item.href}
                className={({ isActive }) => isActive ? 'menu-active' : 'no hay clase'} 
                onClick={closeMenu} 
              >
                {item.label}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </ContentNavMenu>
  )
}

export default NavMenu