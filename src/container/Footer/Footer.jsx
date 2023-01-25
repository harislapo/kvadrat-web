import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer footer__padding" id="contact">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans">Stupska br: 19/A1</p>
        <p className="p__opensans">Sarajevo, Bosnia and Herzegovina</p>
        <p className="p__opensans">+387 33 841 641</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.logo} alt="logo" />
        <p className="p__opensans">kvadrat.d.o.o@gmail.com</p>
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/profile.php?id=100019957350229"
            target="_blank"
          >
            <FiFacebook />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FiInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FiLinkedin />
          </a>
        </div>
      </div>
      <div className="app__footer-links_hours">
        <h1 className="app__footer-headtext flex__center">Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">8 AM - 4 PM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans text-sm">&copy; Kvadrat 2023 &trade; </p>
    </div>
  </div>
);

export default Footer;
