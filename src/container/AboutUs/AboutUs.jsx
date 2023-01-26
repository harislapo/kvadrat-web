import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div id="about" className="app__aboutus flex__center section__padding">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">
          <b>KVADRAT</b> is a multidisciplinary office that focuses on
          architecture and design, from large scale planning to interior design.
          Rich with multiple expertises, our office is fuelled by talented
          designers and experienced architects that jointly develop projects
          from early sketches to on-site supervision. At the core of our
          architecture is the ability to take a fresh look at design issues
          through experienced eyes. Our approach aims at turning intense
          research and analysis of practical and theoretical matters into the
          driving forces of design.
        </p>
      </div>

      <div className="app__aboutus-content_divider"></div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>
        <p className="p__opensans">
          Founded and directed by <b>Adnan Omerović</b>, <b>KVADRAT</b> has a
          diverse and strong team based in Sarajevo, Bosnia and Herzegovina from
          2003. - nowadays. We work with corporate, government and private
          clients in numerous countries to realize civic, residential, office,
          commercial development projects. <b>KVADRAT</b> envisions itself as a
          proactive partner for its client, rather than a consultant. The office
          has a wide portfolio of work and the attitude of involving external
          experts to improve the design intelligence of its team.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
