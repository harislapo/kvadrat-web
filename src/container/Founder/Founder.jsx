import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { FiExternalLink } from 'react-icons/fi';
import './Founder.css';

const Founder = () => {
  return (
    <div className="app__wrapper section__padding" id="founder">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img
          src={images.founder}
          alt="Founder's image"
          className="white-border white-border-none"
        />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Kvadrat's founder" />
        <h1 className="headtext__cormorant">Adnan Omerović</h1>
        <div className="app__founder-content">
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            doloribus pariatur voluptatem sed officiis! Quod repudiandae
            corrupti laudantium ab soluta dolorem necessitatibus repellendus,
            facere deserunt neque ut in eum voluptate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Id doloribus pariatur voluptatem
            sed officiis! Quod repudiandae corrupti laudantium ab soluta dolorem
            necessitatibus repellendus, facere deserunt neque ut in eum
            voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Id doloribus pariatur voluptatem sed officiis! Quod repudiandae
            corrupti laudantium ab soluta dolorem necessitatibus repellendus,
            facere deserunt neque ut in eum voluptate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Id doloribus pariatur voluptatem
            sed officiis! Quod repudiandae corrupti laudantium ab soluta dolorem
            necessitatibus repellendus, facere deserunt neque ut in eum
            voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Id doloribus pariatur voluptatem sed officiis! Quod repudiandae
            corrupti laudantium ab soluta dolorem necessitatibus repellendus,
            facere deserunt neque ut in eum voluptate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Id doloribus pariatur voluptatem
            sed officiis! Quod repudiandae corrupti laudantium ab soluta dolorem
            necessitatibus repellendus, facere deserunt neque ut in eum
            voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Id doloribus pariatur voluptatem sed officiis! Quod repudiandae
            corrupti laudantium ab soluta dolorem necessitatibus repellendus,
            facere deserunt neque ut in eum voluptate.
          </p>
          <a
            href="https://kvadratatelje.ba/pdfs/Adnan_Omerovic_CV.pdf"
            target="_blank"
            className="p__opensans"
          >
            Portfolio <FiExternalLink color="white" fontSize={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Founder;
