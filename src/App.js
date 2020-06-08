import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import youtube from "./Api/youtube";
import VideoDetails from './components/VideoDetails';


export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 15,
        key: 'AIzaSyD9usn3SsZ6loZrlw619om0AGx0mALOGSY',
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
  return (
    <div className="App">
        <Header title="YouTube" onSubmit={handleSubmit}/>
        <VideoDetails video={selectedVideo} videos={videos} onVideoSelect={setSelectedVideo} />
    </div>
  );

  
}

