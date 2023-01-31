import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { images } from '../../constants';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="app__footer footer__padding" id="contact">
      <div className="app__footer-back_button">
        <a href="#navbar">
          <AiOutlineArrowUp />
        </a>
      </div>
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h2 className="app__footer-headtext">
            {t('footer.contact.heading')}
          </h2>
          <p className="p__opensans">{t('footer.contact.paragraph.item1')}</p>
          <p className="p__opensans">{t('footer.contact.paragraph.item2')}</p>
          <p className="p__opensans">+387 33 841 641</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.logo} alt="logo" />
          <p className="p__opensans mail_sm-text">kvadrat.doo@gmail.com</p>
          <div className="app__footer-links_icons">
            <a
              href="https://www.facebook.com/profile.php?id=100019957350229"
              target="_blank"
            >
              <FiFacebook />
            </a>
            <a href="https://www.instagram.com/kvadrat_atelje" target="_blank">
              <FiInstagram />
            </a>
            <a
              href="https://linkedin.com/in/adnan-omerovi%C4%87-340a6058"
              target="_blank"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
        <div className="app__footer-links_hours">
          <h2 className="app__footer-headtext flex__center">
            {t('footer.hours.heading')}
          </h2>
          <p className="p__opensans">{t('footer.hours.paragraph.item1')}</p>
          <p className="p__opensans">{t('footer.hours.paragraph.item2')}</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans text-sm">
          &copy; Kvadrat Atelje &trade; 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
