import React from 'react'
import VideoList from './VideoList';

function VideoDetails(props) {
    if (!props.video) return <div className="text-center p-20">Search the videos and enjoy it...</div>;

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  

    return (
        <div className="container-fluid p-20">
            <div className="row">
            <div className="col-md-8">
             <iframe
          frameBorder="0"
          height="500px"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
        <div className="p-15">
        <h4>{props.video.snippet.title} - {props.video.snippet.channelTitle}</h4>
        <h5>         {props.video.snippet.channelTitle} </h5>
        <p>{props.video.snippet.description}</p>
        </div>
        </div>
        <div className="col-md-4">
            <VideoList videos={props.videos} onVideoSelect={props.onVideoSelect} />
</div>
        </div>
        </div>
    )
}

export default VideoDetails
