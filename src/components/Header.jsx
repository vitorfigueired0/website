import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({ isSideOpen }) => {
  const sectionsStyle = `flex gap-6 text-lg md:text-xl md:gap-20 font-black ${isSideOpen ? 'flex-col' : ''}`
  const navStyle = `${isSideOpen ? '' : 'hidden md:block'}`
  
  return (
    <nav className={navStyle}>
      <ul className={sectionsStyle}>
        <li className='header-nav-item'>home</li>
        <li className='header-nav-item'>skills</li>
        <li className='header-nav-item'>projects</li>
        <li className='header-nav-item'>contact</li>
      </ul>
    </nav>
  )
}

export const Header = () => {
  const [isSideOpen, setIsSideOpen] = useState(false)
  const headerStyle = `m-[-20px] bg-black p-5 fixed md:static flex gap-5 md:h-40 ${isSideOpen ? 'w-36 h-full flex-col border-r border-white' : 'h-18 w-full items-center'}`

  const openSideBar = () => {
    setIsSideOpen(!isSideOpen)
  }

  return (
    <header className={headerStyle}>
      <button className='h-12 w-9 flex items-center md:hidden' onClick={openSideBar}>
        <GiHamburgerMenu size={30} className='hover:text-pallete-4'/>
      </button>
      <Navbar isSideOpen={isSideOpen} />      
    </header>
  )
} 