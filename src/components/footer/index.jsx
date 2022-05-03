
import { ContentFooter } from "./styles"
import { Link } from "react-router-dom"

import { RiLinkedinBoxFill, RiGithubFill, RiInstagramFill } from "react-icons/ri"

const listSocialMedia = [
  {
    id: 'linkedin',
    icon: RiLinkedinBoxFill,
    href: '#'
  },
  {
    id: 'github',
    icon: RiGithubFill,
    href: '#'
  },
  {
    id: 'instagram',
    icon: RiInstagramFill,
    href: '#'
  }
]


const Footer = () => {
  return (
    <ContentFooter>
      <span className="paragraph">
        Encuentrame en: 
      </span>
      {
        listSocialMedia.map( ({ id, icon: Icon, href }) => (
          <Link to={href} className="icon" key={id}>
            <i>
              {<Icon />}
            </i>
          </Link>
        ) )
      }
    </ContentFooter>
  )
}

export default Footer