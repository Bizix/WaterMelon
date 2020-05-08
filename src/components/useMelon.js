import { useContext, useState } from "react";

import Context from "../contexts/MusicContext";

import genius from "../apis/genius";
import youtube from "../apis/youtube";

const useMelon = () => {
  const [state, setState] = useContext(Context);

  const [isLoading, setIsLoading] = useState(false);

  // Fetch Youtube Video ID for selected song
  const fetchYoutube = async (artist, title) => {
    var KEY = "AIzaSyDJG4uwhqh0A4gCLmgQuDhyJM7DK57dbDk";

    const res = await youtube.get("/search", {
      params: {
        q: `${artist} ${title}`,
        part: "snippet",
        maxResults: 1,
        key: KEY,
      },
    });

    const videoId = res.data.items[0].id.videoId;
    return videoId;
  };

  // Fetch first 50 Youtube Video ID in a given genre
  const fetchGenrePlaylist = async () => {
    if (isLoading !== true) {
      setIsLoading(true);

      let customPlaylist = [];
      let currentId = "";
      let tracks = { ...state.tracks };
      let currentGenre = [state.genre.id];

      for (let i = 0; i < 51; i++) {
        // Get YoutubeID
        if (tracks[currentGenre][i].YouTubeId === "") {
          currentId = await fetchYoutube(
            tracks[currentGenre][i].artist,
            tracks[currentGenre][i].title
          );
          // currentId = `asdf${i}`;
        } else currentId = state.tracks[i].YouTubeId;

        // Give option to remove individual tracks form playlist
        let availableAction = "delete";
        tracks[currentGenre][i].availableAction = availableAction;

        customPlaylist.push(currentId);
      }
      setIsLoading(false);

      setState((state) => ({ ...state, tracks, customPlaylist }));
    }
    // Other than double fetching works
  };

  const clearPlaylist = () => {
    let customPlaylist = [];
    let tracks = { ...state.tracks };
    let currentGenre = [state.genre.id];

    for (let playlist in tracks) {
      for (let item in playlist) {
        tracks[currentGenre][item].availableAction = "add";
      }

      setState((state) => ({ ...state, tracks, customPlaylist }));
    }
  };

  // Update Genre onHeaderClick
  const getGenre = (genre) => {
    setState((state) => ({ ...state, genre }));
  };

  // Update currently selected song (onClick)
  const handleCurrentSong = async (track, index, action) => {
    let videoId;
    let customPlaylist = [...state.customPlaylist];
    let tracks = { ...state.tracks };
    let currentGenre = [state.genre.id];

    track.YouTubeId
      ? (videoId = track.YouTubeId)
      :  (videoId = await fetchYoutube(track.artist, track.title));
        // (videoId = `${state.genre.id}.${index}`);

    // Update track @ selected index to include youtube ID
    if (state.tracks[index]) {
      let tracks = [...state.tracks];
      tracks[index].YouTubeId = videoId;
      setState((state) => ({ ...state, tracks }));
    }
    // Play current video
    if (action === "play") {
      let currentSong = {
        title: track.title,
        artist: track.artist,
        album: track.album,
        videoId: videoId,
      };

      setState((state) => ({ ...state, currentSong }));
    }

    // Delete from custom playlist
    else if (customPlaylist.includes(videoId)) {
      console.log(`delete ${videoId}`);
      customPlaylist = customPlaylist.filter((item) => item !== videoId);
      console.log(customPlaylist);
      setState((state) => ({ ...state, customPlaylist }));

      tracks[currentGenre][index].availableAction = "add";

      setState((state) => ({ ...state, tracks }));
    }
    // Add to custom Playlist
    else if (customPlaylist.includes(videoId) === false) {
      console.log(`add ${videoId}`);
      customPlaylist = [...state.customPlaylist, videoId];
      console.log(customPlaylist);
      setState((state) => ({ ...state, customPlaylist }));

      tracks[currentGenre][index].availableAction = "delete";

      setState((state) => ({ ...state, tracks }));
    }
  };

  // Search Genius for lyrics, open in new tab
  const getLyrics = async (artist, title, album) => {
    let KEY = "AIzaSyDJG4uwhqh0A4gCLmgQuDhyJM7DK57dbDk";
    let CX = "002575468132888478770:v1qvdfuvdlz";

    const res = await genius.get("?", {
      params: {
        key: KEY,
        cx: CX,
        q: `${title} ${album}`,
      },
    });

    let results = res.data.items;

    if (typeof results !== "undefined") {
      let lyricLink = results[0].link;

      console.log(lyricLink);
      var win = window.open(lyricLink, "_blank");
      win.focus();
    } else {
      console.log("No lyrics found!");
    }
  };

  return {
    state,
    headers: state.headers,
    genre: state.genre,
    tracks: state.tracks,
    currentSong: state.currentSong,
    customPlaylist: state.customPlaylist,
    isLoading,
    clearPlaylist,
    fetchYoutube,
    fetchGenrePlaylist,
    getGenre,
    handleCurrentSong,
    getLyrics,
  };
};

export default useMelon;
