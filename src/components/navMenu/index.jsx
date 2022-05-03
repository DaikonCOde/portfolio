import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ContentNavMenu } from "./styles"

const listNav = [
  {
    label: '_hola',
    href: '/'
  },
  {
    label: '_sobre-mi',
    href: '/about-me'
  },
  {
    label: '_proyectos',
    href: '/projects'
  },
  {
    label: '_contactame',
    href: '/contact-me'
  }
]

const NavMenu = ({ closeMenu }) => {
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
              <Link to={item.href} onClick={closeMenu} >{item.label}</Link>
            </li>
          ))
        }
      </ul>
    </ContentNavMenu>
  )
}

export default NavMenu