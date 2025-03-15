import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import React, { forwardRef } from 'react';

export const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();

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
      name: 'Email',
      link: 'mailto:vitorfigueiredodev@outlook.com',
      Icon: TbMailFilled 
    }
  ];

  const SocialLink = ({ name, link, Icon }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-transform hover:scale-110"
        aria-label={name}
      >
        <Icon 
          size={24} 
          className="text-pallete-3 hover:text-pallete-4 transition-colors duration-300" 
        />
      </a>
    );
  };

  return (
    <footer ref={ref} className="bg-pallete-1 border-t border-pallete-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-sm font-semibold text-pallete-4 tracking-wider uppercase mb-4">
                About Me
              </h3>
              <p className="text-base text-pallete-3 leading-relaxed">
                I'm a passionate developer focused on creating beautiful and functional web applications.
                Let's work together to bring your ideas to life.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-pallete-4 tracking-wider uppercase mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-base text-pallete-3 hover:text-pallete-4 transition-colors duration-300">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-pallete-3 hover:text-pallete-4 transition-colors duration-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-pallete-3 hover:text-pallete-4 transition-colors duration-300">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-sm font-semibold text-pallete-4 tracking-wider uppercase mb-4">
                Contact
              </h3>
              <p className="text-base text-pallete-3 mb-4">
                vitorfigueiredodev@outlook.com
              </p>
              <div className="flex space-x-6">
                {contacts.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-pallete-2">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-sm text-pallete-3">
                © {currentYear} Vitor Figueiredo. All rights reserved.
              </p>
              <p className="text-sm text-pallete-3 flex items-center">
                Made with <FaHeart className="mx-1 text-pallete-2 hover:text-pallete-4 transition-colors duration-300" /> in Brazil
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;