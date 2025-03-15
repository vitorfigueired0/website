import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NavItem = ({ label, isActive, onClick }) => (
  <li>
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 rounded-lg
        ${isActive 
          ? 'text-pallete-4 bg-pallete-2/10' 
          : 'text-pallete-3 hover:text-pallete-4 hover:bg-pallete-2/5'
        }
      `}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pallete-2 to-pallete-3 rounded-full" />
      )}
    </button>
  </li>
);

const MobileNav = ({ isOpen, onClose, children }) => (
  <div
    className={`fixed inset-y-0 left-0 z-50 w-64 bg-pallete-1 shadow-2xl transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}
  >
    <div className="flex flex-col h-full p-6">
      <button
        onClick={onClose}
        className="self-end p-2 text-pallete-3 hover:text-pallete-4 transition-colors duration-300"
        aria-label="Close menu"
      >
        <HiX size={24} />
      </button>
      <nav className="mt-8">
        <ul className="flex flex-col space-y-4">
          {children}
        </ul>
      </nav>
    </div>
  </div>
);

const Overlay = ({ isVisible, onClick }) => (
  <div
    onClick={onClick}
    className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40
      ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}
  />
);

export const Header = ({ refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { label: 'Home', ref: refs[0] },
    { label: 'Skills', ref: refs[1] },
    { label: 'Projects', ref: refs[2] },
    { label: 'Contact', ref: refs[3] }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find the section that is currently in view
      let currentSection = 0;
      const viewportHeight = window.innerHeight;
      const buffer = viewportHeight * 0.3; // 30% of viewport height as buffer

      sections.forEach((section, index) => {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const elemTop = rect.top + window.scrollY;
          
          // Check if the element is in view with buffer
          if (scrollPosition >= elemTop - buffer) {
            currentSection = index;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (ref, index) => {
    const element = ref.current;
    const offset = -80; // Offset for the header height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    setIsOpen(false);
    setActiveSection(index);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 bg-pallete-1/80 backdrop-blur-md border-b border-pallete-2/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-start h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-pallete-3 hover:text-pallete-4 transition-colors duration-300 -ml-2"
              aria-label="Open menu"
            >
              <HiMenuAlt3 size={24} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center space-x-1">
                {sections.map((section, index) => (
                  <NavItem
                    key={section.label}
                    label={section.label}
                    isActive={activeSection === index}
                    onClick={() => scrollToSection(section.ref, index)}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {sections.map((section, index) => (
          <NavItem
            key={section.label}
            label={section.label}
            isActive={activeSection === index}
            onClick={() => scrollToSection(section.ref, index)}
          />
        ))}
      </MobileNav>

      {/* Overlay */}
      <Overlay isVisible={isOpen} onClick={() => setIsOpen(false)} />

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16" />
    </>
  );
}; 