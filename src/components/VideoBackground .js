import React, {useEffect, useState} from 'react';
import "./style.css"
import video from './video.mp4'
const VideoBackground = () => {
    const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });
    useEffect(() => {
        const updateDimensions = () => {
          const { innerWidth, innerHeight } = window;
          const aspectRatio = 16 / 9; 
          let width = innerWidth;
          let height = innerWidth / aspectRatio;
    
          if (height < innerHeight) {
            height = innerHeight;
            width = innerHeight * aspectRatio;
          }
    
          setVideoDimensions({ width, height });
        };
    
        window.addEventListener('resize', updateDimensions);
        updateDimensions();
    
        return () => {
          window.removeEventListener('resize', updateDimensions);
        };
      }, []);
    return (
        <div className="video-background">
            <video autoPlay muted loop id="myVideo" style={{ width: videoDimensions.width, height: videoDimensions.height }}>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoBackground;
