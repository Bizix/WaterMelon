import React from "react";
import Header from "./Header";
import PlaylistHeaders from "./PlaylistHeaders";
import NowPlaying from "./NowPlaying";
import Playlist from "./Playlist";

import { MusicProvider } from "../contexts/MusicContext";

const App = () => {
  return (
    <div id="main_container" className="App ui container">
      <MusicProvider>
        <Header />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <PlaylistHeaders />
              <Playlist />
            </div>
            <div className="five wide column">
              <NowPlaying />
            </div>
          </div>
        </div>
      </MusicProvider>
    </div>
  );
};

export default App;
