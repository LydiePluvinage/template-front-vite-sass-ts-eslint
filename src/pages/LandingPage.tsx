import React from 'react';
import ReactPlayer from 'react-player';

import EssentialsPage from '../components/homepage/EssentialsPage';
// Executer NPM install pour recuperer react player //
const LandingPage = () => {
  const videoSrc = '../assets/video/hpvideo.mp4';
  return (
    <div className="landingPage">
      <h3> Brille </h3>
      <img
        id="logo"
        src="../assets/images/logo_scroll.svg"
        alt="logo for scrolling down"
      />
      <ReactPlayer
        url={videoSrc}
        width="screen"
        height="screen"
        playing={true}
        loop={true}
      />
      <EssentialsPage />
    </div>
  );
};

export default LandingPage;
