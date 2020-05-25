import React from "react";
import useMelon from "./useMelon";

const YouTubePlayer = (props) => {
  const { watchingPlaylist } = useMelon();
  let url;
  if (watchingPlaylist === true) {
    url = `https://www.youtube.com/embed/VIDEO_ID?playlist=${props.playlist}`;
  } else if (watchingPlaylist === false) {
    url = `https://www.youtube.com/embed/${props.youtubeID}`;
  } else {
    return "";
  }

  if (typeof url !== "undefined") {
    console.log(url);
  }

  return (
    <div id="iframe_container">
      <iframe
        id="ytplayer"
        className="playlist"
        type="text/html"
        width="900"
        height="506"
        allowFullScreen="allowfullscreen"
        src={url}
      />
    </div>
  );
};

export default YouTubePlayer;
