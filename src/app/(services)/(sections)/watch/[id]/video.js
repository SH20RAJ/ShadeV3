'use client'
import React, { useEffect } from 'react';
import Plyr from "plyr";
import "plyr/dist/plyr.css";  // Ensure you include the Plyr CSS for styling

export default function Video({contentURL, image}) {

  useEffect(() => {
    // Ensure this code runs only in the client environment
    if (typeof window !== "undefined") {
      const player = new Plyr('#player', {
        controls: [

        'play-large', // The large play button in the center
        // 'rewind', // Rewind button
        'play', // Play/pause button
        // 'fast-forward', // Fast forward button
        'progress', // The progress bar and scrubber
        'current-time', // The current time of playback
        'duration', // The full duration of the media
        'mute', // Mute/unmute button
        'captions', // Toggle captions
        'settings', // Settings menu
        'pip', // Picture-in-picture button
        'airplay', // Airplay button
        // 'download', // Download button
        'fullscreen' // Fullscreen button
    ],
        keyboard : { focused: true, global: true }
      });



      // Setup the video source for Plyr using the provided MP4 URL
      player.source = {
        type: 'video',
        poster : image,
        sources: [{
          src: contentURL || 'https://cdn.jsdelivr.net/gh/SH20RAJ/Sopplayer@main/sample.mp4',
          type: 'video/mp4', // Specify the MIME type for the MP4 format
        }],
      };

      // Cleanup function to destroy Plyr instance on component unmount
      return () => player.destroy();
    }
  }, []);

  return (
    <>
      <div className="w-full h-full">
        {/* The video element with id="player" that Plyr will enhance */}
        <video id="player" controls></video>
      </div>
    </>
  );
}
