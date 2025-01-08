import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";


export const Footer = () => {

  const contacts = [
    {
      name: 'Github',
      link: 'https://github.com/vitorfigueired0',
      Icon: FaGithub
    },
    {
      name: 'Linkedin',
      link: 'https://linkedin.com/in/vitorfig',
      Icon: FaLinkedin
    },
    {
      name: 'vitorfigueiredodev@outlook.com',
      link: 'mailto:vitorfigueiredodev@outlook.com',
      Icon: TbMailFilled 
    }
  ]

  const ContactBadge = ({ name, link, Icon }) => {
    return(
      <div className='flex items-center gap-2 p-2 rounded-xl hover:bg-pallete-2 cursor-pointer'>
        <Icon size={25}/>
        <a href={link} target='blank' className='font-bold'>{name}</a>
      </div>
    )
  }

  return(
    <footer className='h-48 lg:h-24'>
      <h1 className='text-2xl font-black'>Contact me</h1>
      <div className='mt-2 gap-5'>
       {contacts.map((badge) => (
        <ContactBadge 
          name={badge.name}
          link={badge.link}
          Icon={badge.Icon}
        />
       ))}
      </div>
    </footer>
  )
}