import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div id="about" className="app__aboutus flex__center section__padding">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia, reiciendis! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Enim obcaecati tenetur voluptates, quis sapiente
          suscipit amet voluptas esse itaque saepe, porro facere ad.
        </p>
      </div>

      <div className="app__aboutus-content_building flex__center">
        <img src={images.about_img1} alt="Image of an skyscraper." />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia, reiciendis! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Enim obcaecati tenetur voluptates, quis sapiente
          suscipit amet voluptas esse itaque saepe, porro facere ad.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
