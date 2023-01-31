import React from 'react';
import { images } from '../../constants';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="app__aboutus flex__center section__padding">
      <div
        className="app__aboutus-content flex__center"
        style={{ alignItems: 'stretch' }}
      >
        <div className="app__aboutus-content_about">
          <h2 className="headtext__cormorant">{t('about_us.heading')}</h2>
          <p className="p__opensans">{t('about_us.paragraph')}</p>
          <div className="app__wrapper_img">
            <img
              src={images.aboutus_img}
              alt="Kvadrat Atelier About Us Image"
              className="white-border"
            />
          </div>
        </div>
        <div className="app__aboutus-content_divider" />
        <div className="app__aboutus-content_history">
          <h2 className="headtext__cormorant">{t('history.heading')}</h2>
          <p className="p__opensans">{t('history.paragraph')}</p>
          <div
            className="app__wrapper_img img_relative"
            style={{ marginLeft: '0' }}
          >
            <img
              src={images.history_img}
              alt="Kvadrat Atelier History Image"
              className="white-border img_absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
