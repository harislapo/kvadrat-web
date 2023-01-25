import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Awards.css';

const dummyData = [
  {
    title: 'Lorem 1',
    subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Lorem 2',
    subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Lorem 3',
    subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
];

const AwardCard = ({ award }) => {
  return (
    <div className="app__awards-card" id="acclaims">
      <div className="app__awards-card_content">
        <p className="p__cormorant" style={{ color: '#DCCa87' }}>
          {award.title}
        </p>
        <p className="p__cormorant">{award.subtitle}</p>
      </div>
    </div>
  );
};

const Awards = () => (
  <div id="awards" className="app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognitions" />
      <h1 className="headtext__cormorant">Acclaims</h1>
      <div className="app__awards">
        {dummyData.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.awards_img} alt="Awards image" />
    </div>
  </div>
);

export default Awards;
