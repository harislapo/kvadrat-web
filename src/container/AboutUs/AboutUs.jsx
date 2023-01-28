import React from 'react';
import { images } from '../../constants';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="app__aboutus flex__center section__padding">
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">{t('about_us.heading')}</h1>
          <p className="p__opensans">{t('about_us.paragraph')}</p>
          <div className="app__wrapper_img white-border">
            <img src={images.aboutus_img} alt="About us image" />
          </div>
        </div>
        <div className="app__aboutus-content_divider" />
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">{t('history.heading')}</h1>
          <p className="p__opensans">
          {t('history.paragraph')}
          </p>
          <div className="app__wrapper_img white-border">
            <img src={images.history_img} alt="History image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
