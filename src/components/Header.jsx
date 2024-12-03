import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ isSideOpen }) => {
  const sectionsStyle = `flex gap-6 text-lg font-black ${isSideOpen ? 'flex-col' : ''}`
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
  const headerStyle = `flex gap-5 p-4 fixed md:static border-white ${isSideOpen ? 'w-36 h-full flex-col border-r' : 'h-20 w-full items-center border-b'}`

  const openSideBar = () => {
    setIsSideOpen(!isSideOpen)
  }

  return (
    <header className={headerStyle}>
      <button className='h-12 w-9 flex items-center ml-3 md:hidden' onClick={openSideBar}>
        <GiHamburgerMenu size={30} />
      </button>
      <Navbar isSideOpen={isSideOpen} />      
    </header>
  )
} 