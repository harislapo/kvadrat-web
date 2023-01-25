import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => {
  return (
    <div id="home" className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Where architecture comes to life." />
        <h1 className="app__header-h1">Kvadrat Atelje</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Architectural studio - Sarajevo, Bosnia and Herzegovina based.
        </p>
      </div>
      <div className="app__wrapper_img">
        <img src={images.header_img} alt="header image" />
      </div>
    </div>
  );
};

export default Header;