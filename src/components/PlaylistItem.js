import React from "react";
import useMelon from "./useMelon";

const PlaylistItem = ({ track, index }) => {
  const { customPlaylist, handleCurrentSong, getLyrics } = useMelon();

  let getButtonTxt = (action) => {
    if (customPlaylist.length === 0) {
      return "Playlist";
    } else if (
      action === "add" &&
      customPlaylist.length > 0 &&
      customPlaylist.length < 50
    ) {
      return "Add";
    } else if (action === "delete") {
      return "Delete";
    }
  };

  return (
    <div className="ui item row" key={track.key}>
      <div className="trackWrapper ui sixteen wide column grid">
        <div className="grid ui fourteen wide column">
          <div className="trackFaqs ui  floated left sixteen wide  row">
            <div className="rank">{track.rank}</div>
            <div className="art_img ui image">
              <img src={track.art} alt="" />
            </div>
            <div className="song_title ">{track.title}</div>
            <div className="artist_name">{track.artist}</div>
            <div className="album_name">{track.album}</div>
          </div>
        </div>
        <div className="mediaLinks two wide ui right floated padded column">
          <div className="ui column">
            <div
              className="mediaButton ui button red  centered fa-2x watchOnYT"
              style={{ display: "inline-block" }}
              onClick={() => {
                handleCurrentSong(track, index, "play");
              }}
            >
              <i className="fab fa-youtube">
                <div className="buttonText">Watch</div>
              </i>
            </div>
            <div
              className="mediaButton ui button grey centered fa-2x watchOnYT"
              style={{ display: "inline-block" }}
              onClick={() => {
                handleCurrentSong(track, index, track.availableAction);
              }}
            >
              <i className="fab fa-youtube">
                <div className="buttonText">
                  {getButtonTxt(track.availableAction)}
                </div>
              </i>
            </div>
            <div
              className="mediaButton ui button black  centered fa-2x watchOnYT"
              style={{ display: "inline-block" }}
              onClick={() => {
                getLyrics(track.artist, track.title, track.album);
              }}
            >
              <i className="fab">
                <div className="buttonText">Lyrics</div>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
