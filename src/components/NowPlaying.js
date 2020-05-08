import React from "react";
import useMelon from "./useMelon";
import YouTubePlayer from "./YouTubePlayer";

function NowPlaying() {
  const {
    state,
    currentSong,
    isLoading,
    fetchGenrePlaylist,
    customPlaylist,
    clearPlaylist,
  } = useMelon();
  return (
    <div>
      <YouTubePlayer
        youtubeID={currentSong.videoId}
        playlist={customPlaylist}
      />
      <div
        className="ui button red basic fa-2x watchOnYT"
        style={{ display: "inline-block" }}
        onClick={() => {
          fetchGenrePlaylist();
        }}
      >
        {isLoading ? `Loading...` : `Quick ${state.genre.text} Playlist`}
      </div>
      <div
        className="ui button red basic fa-2x watchOnYT"
        style={{ display: "inline-block" }}
        onClick={() => {
          clearPlaylist();
        }}
      >
        Delete Current Playlist
      </div>
    </div>
  );
}

const MemoizedNowPlaying = React.memo(NowPlaying);
export default MemoizedNowPlaying;
