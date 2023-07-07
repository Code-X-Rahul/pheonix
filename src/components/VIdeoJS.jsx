"use client"
import fluidPlayer from 'fluid-player'
import { useEffect, useRef } from 'react';

const VIdeoJS = () => {
  let self = useRef(null);
  let player = null;

  const options = {
    layoutControls: {
      fillToContainer: true,
      primaryColor: false,
      playButtonShowing: true,
      playPauseAnimation: true,
      autoPlay: false,
      preload: false,
      mute: false,
      doubleclickFullscreen: true,
      subtitlesEnabled: true,
      keyboardControl: true,
      layout: 'default',
      allowDownload: false,
      playbackRateEnabled: false,
      allowTheatre: true,
      title: false,
      loop: false,
      controlBar: {
        autoHide: true,
        autoHideTimeout: 3,
        animated: true
      },
      controlForwardBackward: {
        show: true // Default: false
      },
      contextMenu: {
        controls: true,
      }
    }
  }

  useEffect(() => {
    if (!player) {
      player = fluidPlayer(self.current, options);
    }
  })
  return (
    <div className=''>
      <video ref={self}>
        <source src='https://m3u8-proxy-cors-lime.vercel.app/cors?url=https://neves.jeffycontent.com/_v10/6e3672bd5ddbd13cdf6891fbb15b61638d4337e3991538afa7a19ae04b4513ff144924f8a75183d2cde74b804329041178f79c64a6754e1d0d67ba1d3772a17eaefe1ad98c7722f67d110b927e07090e47b8d7b608dc084b5c19669b24d84b43beb6bbe12e62441c1fb607fc2e3d2fa7f278fd3f5d760e37920ee6484fdbb3947cd9ca015dd92980ba05e7e18189c097/360/index.m3u8'
          data-fluid-hd
          title='auto'
          type='application/x-mpegURL' />
      </video>
    </div>
  )
}

export default VIdeoJS