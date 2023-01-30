import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Founder.css';

const Founder = () => {
  const { t } = useTranslation();

  return (
    <div className="app__wrapper section__padding" id="founder">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img
          src={images.founder}
          alt="Founder's image"
          className="white-border"
        />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title={t('founder.subheading')} />
        <h1 className="headtext__cormorant">Adnan Omerović</h1>
        <div className="app__founder-content">
          <a
            href="https://kvadratatelje.ba/pdfs/Adnan_Omerovic_CV.pdf"
            target="_blank"
            className="p__opensans"
            id='golden-color'
          >
            Portfolio <FiExternalLink color="white" fontSize={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Founder;
