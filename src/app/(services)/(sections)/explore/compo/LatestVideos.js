import React, { useState, useEffect } from 'react'
import { VideoComponent, VideoComponentSkeleton } from './youtubefeed'

export default function LatestVideos() {

    const [loading, setLoading] = useState(true);
    const [feed, setFeed] = useState([]);
  
  
    useEffect(() => {
      const fetchdata = async () => {
        try {
          const res = await fetch("/api/randomfeed?limit=7&type=video&orderBy=latest");
          const data = await res.json();
          setFeed(data.data);
          setLoading(false);
          console.log(feed, loading);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };
  
      fetchdata();
    }, []); // Empty dependency array ensures this effect runs only once on mount

    
  return (
    <>
      

      {
                feed.map((feed,i) => <VideoComponent feed={feed} key={i}  />)
              }

              {
                loading && Array(25).fill(0).map((i2,i)=> <VideoComponentSkeleton key={i} />) 
              }


    </>
  )
}
