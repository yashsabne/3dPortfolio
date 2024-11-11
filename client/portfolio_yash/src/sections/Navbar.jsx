import React, { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = () => {
  return (
    <ul className="flex flex-col sm:flex-row sm:space-x-4">
      {navLinks.map(({ id, href, name }) => (
        <li key={id}>
          <a href={href} className="text-neutral-400 hover:text-white transition-colors">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            YASH SABNE
          </a>
          <button onClick={toggleMenu} className="sm:hidden">
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle"
              className="w-6 h-6" />
          </button>
          <nav className={`sm:flex hidden`}>
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen?'max-h-screen':'max-h-0'}`} >
        <nav className='p-5'>
            <NavItems/>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
