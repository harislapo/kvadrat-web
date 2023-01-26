import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar" id="navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="App logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#founder">Founder</a>
        </li>
        <li className="p__opensans">
          <a href="#projects">Projects</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-language">
        <a href="#">
          <img src={images.ba_flag} />
        </a>
      </div>
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
            <MdClose
              fontSize={28}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smscreen_links">
              <li className="p__opensans">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a href="#founder" onClick={() => setToggleMenu(false)}>
                  Founder
                </a>
              </li>
              <li className="p__opensans">
                <a href="#projects" onClick={() => setToggleMenu(false)}>
                  Projects
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              <li className="app__navbar-smscreen_links-language">
                <a href="#">
                  <img src={images.ba_flag} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
