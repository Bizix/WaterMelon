import React from "react";
import _ from "lodash";
import useMelon from "./useMelon";
import PlaylistItem from "./PlaylistItem";
import Spinner from "./spinner";

const Playlist = () => {
  const {
    isLoading,
    genre,
    tracks,
  } = useMelon();

  const playlistRendor = () => {
    let currentList = tracks[genre.id];

    if (isLoading || !currentList) {
      return <Spinner />;
    } else {
      currentList = _.toArray(currentList);
      const renderedList = currentList.map((track, index) => {
        return <PlaylistItem track={track} index={index} key={index} />;
      });
      return (
        <>
          {renderedList}
        </>
      );
    }
  };

  return (
    <>
      <div id="playlist_container" className="ui relaxed centered list grid">{playlistRendor()}</div>
    </>
  );
};


const MemoizedPlaylist = React.memo(Playlist);

export default MemoizedPlaylist;
