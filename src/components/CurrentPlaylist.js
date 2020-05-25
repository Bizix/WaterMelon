import React from "react";
import _ from "lodash";

import PlaylistItem from "./PlaylistItem";
import useMelon from "./useMelon";

function CurrentPlaylist() {
  const { watchingPlaylist, playlistTracks, currentSong } = useMelon();

  const renderCurrentPlaylist = () => {
    let playlist = playlistTracks;

    if (watchingPlaylist === false) {
      return (
        <div id="current_song">
          <PlaylistItem
            track={currentSong}
            index={currentSong.trackIndex}
            key={currentSong.YouTubeId}
          />
        </div>
      );
    } else if (watchingPlaylist === true) {
      let playlistToArray = _.toArray(playlist);
      const renderedList = playlistToArray.map((track, index) => {
        return (
          <PlaylistItem track={track} index={track.trackIndex} key={index} />
        );
      });

      return <div id="custom_playlist_container" className="ui list grid"> {renderedList} </div>;
    } else {
      return "Loading...";
    }
  };

  return <div id="current_playlist_container">{renderCurrentPlaylist()}</div>;
}

export default CurrentPlaylist;
