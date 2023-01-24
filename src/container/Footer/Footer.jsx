import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer footer__padding" id="contact">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans">Sarajevo, 71000, Bosnia and Herzegovina</p>
        <p className="p__opensans">+387 33 227 881</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.logo} alt="logo" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiLinkedin />
        </div>
      </div>
      <div className="app__footer-links_hours">
        <h1 className="app__footer-headtext flex__center">Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">8 AM - 5 PM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">&copy; Kvadrat 2023 &trade; </p>
    </div>
  </div>
);

export default Footer;
