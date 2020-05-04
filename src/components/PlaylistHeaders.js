import React from "react";

const PlaylistHeaders = () => {
  return (
    <div>
      <section>
        <div className="playlist_header">
          <div className="ranking">Ranking</div>
          <div className="song">Song</div>
          <div className="artist_name">Artist</div>
          <div className="album">Album</div>
          <div className="upA">
            <i className="fas fa-angle-up"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaylistHeaders;
