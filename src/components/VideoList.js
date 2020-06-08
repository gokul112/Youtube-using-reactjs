import React from 'react'
import VideoItem from './VideoItem'

function VideoList(props) {
    const listOfVideos = props.videos.map(video => (
        <VideoItem
          onVideoSelect={props.onVideoSelect}
          key={video.id.videoId}
          video={video}
        />
      ));
    return (
        <div>
           {listOfVideos}
        </div>
    )
}

export default VideoList
