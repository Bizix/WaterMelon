import React from "react";
import useMelon from "./useMelon";

const PlaylistItem = ({ track, index }) => {
  const { customPlaylist, handleCurrentSong, getLyrics } = useMelon();

  let getButtonTxt = (action) => {
    if (customPlaylist.length === 0) {
      return "Create Playlist";
    } else if (
      action === "add" &&
      customPlaylist.length > 0 &&
      customPlaylist.length < 50
    ) {
      return "Add to Playlist";
    } else if (action === "delete") {
      return "Delete From Playlist";
    }
  };

  return (
    <div className="trackWrapper item" key={track.key}>
      <div className="playlist trackFaqs">
        <div className="rank">{track.rank}</div>
        <div className="art_img">
          <img src={track.art} alt="" />
        </div>

        <div className="song_title">{track.title}</div>

        <div className="artist_name">{track.artist}</div>
        <div className="album_name">{track.album}</div>
      </div>
      <div className="mediaLinks">
        <div
          className="ui button red basic fa-2x watchOnYT"
          style={{ display: "inline-block" }}
          onClick={() => {
            handleCurrentSong(track, index, "play");
          }}
        >
          <i className="fab fa-youtube">
            <div>Watch</div>
          </i>
        </div>
        <div
          className="ui button black basic fa-2x watchOnYT"
          style={{ display: "inline-block" }}
          onClick={() => {
            handleCurrentSong(track, index, track.availableAction);
          }}
        >
          <i className="fab fa-youtube">
            <div>{getButtonTxt(track.availableAction)}</div>
          </i>
        </div>
        <div
          className="ui button black basic fa-2x watchOnYT"
          style={{ display: "inline-block" }}
          onClick={() => {
            getLyrics(track.artist, track.title, track.album);
          }}
        >
          <i className="fab fa-youtube">
            <div>Lyrics</div>
          </i>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
