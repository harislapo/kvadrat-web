import React, { useState } from 'react';
import { GiHamburgerMenu, GiPencilRuler } from 'react-icons/gi';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="App logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#projects">Projects</a>
        </li>
        <li className="p__opensans">
          <a href="#services">Services</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-smscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={28}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smscreen_overlay flex__center slide-bottom">
            <GiPencilRuler
              fontSize={28}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smscreen_links">
              <li className="p__opensans">
                <a href="#projects">Projects</a>
              </li>
              <li className="p__opensans">
                <a href="#services">Services</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
