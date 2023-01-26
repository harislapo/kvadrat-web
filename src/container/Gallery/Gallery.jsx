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

const Gallery = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const galleryImages = [
    images.gallery_001,
    images.gallery_002,
    images.gallery_003,
    images.gallery_004,
    images.gallery_005,
    images.gallery_006,
    images.gallery_007,
    images.gallery_008,
    images.gallery_009,
    images.gallery_0010,
    images.gallery_0011,
    images.gallery_0012,
    images.gallery_0013,
    images.gallery_0014,
    images.gallery_0015,
    images.gallery_0016,
    images.gallery_0017,
    images.gallery_0018,
    images.gallery_0019,
    images.gallery_0020,
    images.gallery_0021,
    images.gallery_0022,
    images.gallery_0023,
    images.gallery_0024,
    images.gallery_0025,
    images.gallery_0026,
    images.gallery_0027,
    images.gallery_0028,
    images.gallery_0029,
  ];

  return (
    <div className="app__gallery flex__center disable_dblclick" id="projects">
      <div className="app__gallery-content">
        <SubHeading title="Gallery" />
        <h1 className="headtext__cormorant">Projects</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
          We are always working on something new. Have a look into some of our
          most recent projects.
        </p>
        <span>
          <a
            href="https://kvadratatelje.ba/pdfs/Kvadrat_Reference.pdf"
            target="_blank"
            className="p__opensans"
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
                <img src={image} alt="Gallery image" />
                <BsInstagram className="gallery__image-icon" />
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
