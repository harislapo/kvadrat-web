import React, { useRef } from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';
import { useTranslation } from 'react-i18next';

const igURL = 'https://www.instagram.com/p/';
const galleryImages = [
  { url: images.gallery_001, href: '' },
  { url: images.gallery_002, href: 'CoCfj-MqKI8' },
  { url: images.gallery_003, href: 'CoCfj-MqKI8' },
  { url: images.gallery_004, href: '' },
  { url: images.gallery_005, href: '' },
  { url: images.gallery_006, href: '' },
  { url: images.gallery_007, href: '' },
  { url: images.gallery_008, href: '' },
  { url: images.gallery_009, href: '' },
  { url: images.gallery_0010, href: '' },
  { url: images.gallery_0011, href: '' },
  { url: images.gallery_0012, href: '' },
  { url: images.gallery_0013, href: '' },
  { url: images.gallery_0014, href: '' },
  { url: images.gallery_0015, href: '' },
  { url: images.gallery_0016, href: '' },
  { url: images.gallery_0017, href: '' },
  { url: images.gallery_0018, href: 'CoHmq4Pt3xj' },
  { url: images.gallery_0019, href: '' },
  { url: images.gallery_0020, href: '' },
  { url: images.gallery_0021, href: '' },
  { url: images.gallery_0022, href: '' },
  { url: images.gallery_0023, href: '' },
  { url: images.gallery_0024, href: '' },
  { url: images.gallery_0025, href: '' },
  { url: images.gallery_0026, href: '' },
  { url: images.gallery_0027, href: '' },
  { url: images.gallery_0028, href: '' },
  { url: images.gallery_0029, href: '' },
  { url: images.gallery_0030, href: '' },
  { url: images.gallery_0031, href: '' },
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const { t } = useTranslation();

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 360;
    } else {
      current.scrollLeft += 360;
    }
  };

  return (
    <div className="app__gallery flex__center disable_dblclick" id="projects">
      <div className="app__gallery-content">
        <SubHeading title={t('gallery.subheading')} />
        <h2 className="headtext__cormorant">{t('gallery.heading')}</h2>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
          {t('gallery.paragraph')}
        </p>
        <span>
          <a
            href="https://kvadratatelje.ba/pdfs/Kvadrat_Portfolio.pdf"
            target="_blank"
            className="p__opensans"
            id="golden-color"
          >
            Portfolio <FiExternalLink color="white" fontSize={16} />
          </a>
        </span>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => {
            return (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img
                  src={image.url}
                  alt={`Gallery image ${index + 1} `}
                  loading="lazy"
                />
                <a
                  // prevent default behavior if there's no url provided yet
                  onClick={image.href === '' ? (e) => e.preventDefault() : null}
                  href={image.href ? igURL + image.href : null}
                  // if url exists, open the instagram link in new tab
                  target={image.href ? '_blank' : '_self'}
                  className="gallery__image-icon"
                >
                  <BsInstagram />
                </a>
              </div>
            );
          })}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => handleScroll('left')}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
