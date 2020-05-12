import React from "react";

const YouTubePlayer = (props) => {
  let url;
  if (props.playlist.length > 0) {
    url = `https://www.youtube.com/embed/VIDEO_ID?playlist=${props.playlist}`;
  } else if (props.youtubeID) {
    url = `https://www.youtube.com/embed/${props.youtubeID}`;
  }

  if (typeof url !== "undefined") {
    console.log(url);
  }

  return (
    <div>
      <iframe
        id="ytplayer"
        className="playlist"
        type="text/html"
        width="1000"
        height="588"
        allowFullScreen="allowfullscreen"
        src={url}
      />
    </div>
  );
};

export default YouTubePlayer;
