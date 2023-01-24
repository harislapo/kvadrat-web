import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => {
  return (
    <div id="home" className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Lorem ipsum, dolor sit amet." />
        <h1 className="app__header-h1">Kvadrat Studio</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          officia iure amet libero laborum.
        </p>
      </div>
      <div className="app__wrapper_img">
        <img src={images.header_img} alt="header image" />
      </div>
    </div>
  );
};

export default Header;
