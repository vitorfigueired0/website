import { FaArrowRightLong, FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import React, { forwardRef } from 'react';

export const MainText = forwardRef(({ projectsRef, contactRef }, ref) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/vitorfigueired0'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/vitorfig'
    },
    {
      name: 'Email',
      icon: TbMailFilled,
      url: 'mailto:vitorfigueiredodev@outlook.com'
    }
  ];

  const scrollToSection = (ref) => {
    const element = ref.current;
    const offset = -100;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center" ref={ref}>
      <div className="max-w-4xl">
        {/* Greeting */}
        <p className="text-pallete-3 mb-4 text-lg font-medium tracking-wider">
          Hi there, I'm
        </p>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-pallete-4">
          Vitor Figueiredo
          <span className="block mt-2 bg-gradient-to-r from-pallete-2 to-pallete-3 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>

        {/* Description */}
        <p className="text-pallete-3 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          I craft robust and scalable web applications, specializing in both frontend and backend development. 
          Let's turn your ideas into reality with clean code and modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button 
            onClick={() => scrollToSection(projectsRef)}
            className="group bg-pallete-2 hover:bg-pallete-3 text-pallete-4 flex items-center gap-3 px-8 py-3 rounded-xl transition-all duration-300 text-lg font-medium"
          >
            View Projects
            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <button 
            onClick={() => scrollToSection(contactRef)}
            className="bg-transparent border-2 border-pallete-2 text-pallete-4 hover:bg-pallete-2/10 flex items-center gap-3 px-8 py-3 rounded-xl transition-all duration-300 text-lg font-medium"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pallete-3 hover:text-pallete-4 transition-colors duration-300"
              aria-label={link.name}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>

        {/* Background Decoration */}
        <div className="absolute top-1/3 right-0 -z-10 w-1/2 h-1/2 bg-pallete-2 opacity-5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 -z-10 w-1/2 h-1/2 bg-pallete-3 opacity-5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
});