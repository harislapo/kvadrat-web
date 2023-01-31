import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      id="header"
      className="app__header app__wrapper section__padding"
      style={{ minHeight: '85vh' }}
    >
      <div className="app__wrapper_info">
        <SubHeading title={t('header.subheading')} />
        <h1 className="app__header-h1">{t('header.heading')}</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          {t('header.paragraph')}
        </p>
      </div>
      <div className="app__wrapper_img">
        <img
          src={images.header_img}
          alt="Kvadrat Atelier Header Image"
          className="white-border"
        />
      </div>
    </div>
  );
};

export default Header;
