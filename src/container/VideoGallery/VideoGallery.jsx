import React, { useRef, useState, useEffect } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { videos, posters } from '../../constants';
import './VideoGallery.css';

// vidRef.current?.load();

const videoGallery = [
  { url: videos.intro_video, poster: posters.intro_video },
  { url: videos.intro_video2, poster: posters.intro_video2 },
  { url: videos.intro_video3, poster: posters.intro_video3 },
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
    const newIndex = isFirstSlide
      ? videoGallery.length - 1
      : currentVideoIndex - 1;
    setCurrentVideoIndex(newIndex);
  };
  const handleNextSlide = () => {
    const isLastSlide = currentVideoIndex === videoGallery.length - 1;
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
        poster={videoGallery[currentVideoIndex].poster}
      >
        <source src={videoGallery[currentVideoIndex].url} />
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
