import React from "react";
import _ from "lodash";

import useMelon from "./useMelon";
import YouTubePlayer from "./YouTubePlayer";
import CurrentPlaylist from "./CurrentPlaylist";

function NowPlaying() {
  const {
    state,
    genre,
    currentSong,
    isLoading,
    fetchGenrePlaylist,
    customPlaylist,
    clearPlaylist,
    viewPlaylist,
  } = useMelon();

  const renderHelper = () => {
    let tracksSize = _.size(state.tracks);
    if (tracksSize != 0) {
      return (
        <div>
          <YouTubePlayer
            youtubeID={currentSong.YouTubeId}
            playlist={customPlaylist}
          />
          <div id="button_container">
            {renderInstantPlaylistButton()}
            {renderPlayistButtons()}
          </div>
          <CurrentPlaylist />
        </div>
      );
    } 
  };

  const renderInstantPlaylistButton = () => {
    if (
      _.size(state.tracks[genre.id]) > 0 &&
      _.size(state.tracks[genre.id]) !== "undefined"
    ) {
      return (
        <div
          className="ui button red basic fa-2x watchOnYT"
          style={{ display: "inline-block" }}
          onClick={() => {
            fetchGenrePlaylist();
          }}
        >
          {isLoading ? `Loading...` : `Quick ${state.genre.text} Playlist`}
        </div>
      );
    }
  };

  const renderPlayistButtons = () => {
    if (customPlaylist.length > 0) {
      return (
        <>
          <div
            className="ui button red basic fa-2x watchOnYT"
            style={{ display: "inline-block" }}
            onClick={() => {
              viewPlaylist();
            }}
          >
            View Playlist ({customPlaylist.length})
          </div>
          <div
            className="ui button red basic fa-2x watchOnYT"
            style={{ display: "inline-block" }}
            onClick={() => {
              clearPlaylist();
            }}
          >
            Delete Playlist
          </div>
        </>
      );
    } else {
      return "";
    }
  };

  return <>{renderHelper()}</>;
}

const MemoizedNowPlaying = React.memo(NowPlaying);
export default MemoizedNowPlaying;
