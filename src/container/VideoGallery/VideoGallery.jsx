import React, { useRef, useState, useEffect } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { intro_video, intro_video2, intro_video3 } from '../../constants';
import './VideoGallery.css';

// vidRef.current?.load();

const videos = [
  { url: intro_video },
  { url: intro_video2 },
  { url: intro_video3 },
];

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const vidRef = useRef();

  const handleVideoReproduction = () => {
    setPlayVideo((prevState) => !prevState);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  const handlePreviousSlide = () => {
    const isFirstSlide = currentVideoIndex === 0;

    // If we are on the first slide, the next video will be the last video in the array
    const newIndex = isFirstSlide ? videos.length - 1 : currentVideoIndex - 1;
    setCurrentVideoIndex(newIndex);
  };
  const handleNextSlide = () => {
    const isLastSlide = currentVideoIndex === videos.length - 1;
    // If we are on the last slide, the next video will be the first video in the array
    const newIndex = isLastSlide ? 0 : currentVideoIndex + 1;
    setCurrentVideoIndex(newIndex);
  };

  useEffect(() => {
    setPlayVideo(false);
    vidRef.current?.load();
  }, [currentVideoIndex]);

  return (
    <div className="app__video disable_dblclick">
      <video
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay={false}
      >
        <source src={videos[currentVideoIndex].url} />
      </video>
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideoReproduction}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
        <div className="app__video-overlay_arrows">
          <BsArrowLeftShort
            className="video__arrow-icon"
            onClick={handlePreviousSlide}
          />
          <BsArrowRightShort
            className="video__arrow-icon"
            onClick={handleNextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
