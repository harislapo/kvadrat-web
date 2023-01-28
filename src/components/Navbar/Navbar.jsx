import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { images } from '../../constants';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [flag, setFlag] = useState('en');

  const { i18n, t } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);

    if (flag === 'ba') {
      setFlag('en');
    } else {
      setFlag('ba');
    }
  };

  return (
    <nav className="app__navbar" id="navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="App logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#about">{t('navbar.items.item1')}</a>
        </li>
        <li className="p__opensans">
          <a href="#founder">{t('navbar.items.item2')}</a>
        </li>
        <li className="p__opensans">
          <a href="#projects">{t('navbar.items.item3')}</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">{t('navbar.items.item4')}</a>
        </li>
      </ul>
      <div className="app__navbar-language disable_dblclick">
        <a
          href={flag === 'ba' ? '#en' : '#ba'}
          onClick={() => handleLanguageChange(flag === 'ba' ? 'en' : 'ba')}
        >
          <img src={flag === 'ba' ? images.en_flag : images.ba_flag} />
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
                  {t('navbar.items.item1')}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#founder" onClick={() => setToggleMenu(false)}>
                  {t('navbar.items.item2')}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#projects" onClick={() => setToggleMenu(false)}>
                  {t('navbar.items.item3')}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  {t('navbar.items.item4')}
                </a>
              </li>
              <li className="app__navbar-smscreen_links-language disable_dblclick">
                <a
                  href={flag === 'ba' ? '#en' : '#ba'}
                  onClick={() =>
                    handleLanguageChange(flag === 'ba' ? 'en' : 'ba')
                  }
                >
                  <img src={flag === 'ba' ? images.en_flag : images.ba_flag} />
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
