
import { ContentFooter } from "./styles"
import { Link } from "react-router-dom"

import { RiLinkedinBoxFill, RiGithubFill, RiInstagramFill } from "react-icons/ri"

const listSocialMedia = [
  {
    id: 'linkedin',
    icon: RiLinkedinBoxFill,
    href: 'https://linkedin.com/in/alexryzsard-ol'
  },
  {
    id: 'github',
    icon: RiGithubFill,
    href: 'https://github.com/DaikonCOde'
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
          <a href={href} target='_blank' className="icon" key={id}>
            <i>
              {<Icon />}
            </i>
          </a>
        ) )
      }
    </ContentFooter>
  )
}

export default Footer