import React from 'react'

function VideoItem(props) {
    return (

<div class="bs-example p-10">
    <div class="card mx-500 cursor" onClick={() => props.onVideoSelect(props.video)}>
        <div class="row no-gutters">
            <div class="col-sm-5">
                <img alt="thumbnail" src={props.video.snippet.thumbnails.medium.url} class="card-img-top h-100"/>
            </div>
            <div class="col-sm-7">
                <div class="card-body">
                <h5 class="card-title">{props.video.snippet.title}</h5>
                </div>
            </div>
        </div>
    </div>
</div>

   
    )
}

export default VideoItem
