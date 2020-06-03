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

      let currentSong = { ...state.currentSong };
      let customPlaylist = [];
      let playlistTracks = [];
      let currentId = "";
      let tracks = { ...state.tracks };
      let currentGenre = [state.genre.id];

      for (let i = 0; i < 10; i++) {
        let currentTrack = tracks[currentGenre][i];

        if (currentTrack.YouTubeId === "") {
          currentId = await fetchYoutube(
            tracks[currentGenre][i].artist,
            tracks[currentGenre][i].title
          );
          // currentId = `${state.genre.id}.${currentTrack.trackIndex}`;
        } else currentId = currentTrack.YouTubeId;

        if (currentSong.YouTubeId === currentId) {
          currentSong.availableAction = "delete";
          setState((state) => ({ ...state, currentSong }));
        }

        // Give option to remove individual tracks form playlist
        let availableAction = "delete";
        currentTrack.availableAction = availableAction;

        customPlaylist.push(currentId);
        playlistTracks.push(currentTrack);
      }
      setIsLoading(false);

      setState((state) => ({
        ...state,
        tracks,
        customPlaylist,
        playlistTracks,
      }));
    }
  };

  const clearPlaylist = () => {
    let customPlaylist = [];
    let playlistTracks = [];
    let tracks = { ...state.tracks };
    let currentGenre = [state.genre.id];
    let watchingPlaylist = false;

    for (let playlist in tracks) {
      for (let item in playlist) {
        tracks[currentGenre][item].availableAction = "add";
      }

      setState((state) => ({
        ...state,
        tracks,
        customPlaylist,
        playlistTracks,
      }));
    }
    setState((state) => ({ ...state, watchingPlaylist }));
  };

  const viewPlaylist = () => {
    let watchingPlaylist = true;
    setState((state) => ({ ...state, watchingPlaylist }));
  };

  // Update Genre onHeaderClick
  const getGenre = (genre) => {
    setState((state) => ({ ...state, genre }));
  };

  // Update currently selected song (onClick)
  const handleCurrentSong = async (track, index, action) => {
    let videoId;
    let currentSong = { ...state.currentSong };
    let customPlaylist = [...state.customPlaylist];
    let playlistTracks = [...state.playlistTracks];
    let tracks = { ...state.tracks };
    let currentGenre = [state.genre.id];

    track.YouTubeId
      ? (videoId = track.YouTubeId)
      : (videoId = await fetchYoutube(track.artist, track.title));
        // (videoId = `${state.genre.id}.${index}`);

    // Check if fetch needed
    if (tracks[currentGenre][index].YouTubeId === "") {
      tracks[currentGenre][index].YouTubeId = videoId;
      setState((state) => ({ ...state, tracks }));
    }
    // Play current video
    if (action === "play") {
      if (window.screen.width > 767) {
        let currentSong = {
          rank: track.rank,
          title: track.title,
          artist: track.artist,
          album: track.album,
          art: track.art,
          YouTubeId: videoId,
          key: track.key,
          availableAction: track.availableAction,
          trackGenre: track.trackGenre,
          trackIndex: track.trackIndex,
        };
        let watchingPlaylist = false;

        setState((state) => ({ ...state, currentSong, watchingPlaylist }));
      } else {
        let ytLink = `https://www.youtube.com/watch?v=${videoId}`;

        var win = window.open(ytLink, "_blank");
        win.focus();
      }
    }

    // Delete from custom playlist
    else if (customPlaylist.includes(videoId)) {
      if (currentSong.YouTubeId === videoId) {
        currentSong.availableAction = "add";

        setState((state) => ({ ...state, currentSong }));
      }

      let currentGenre = track.trackGenre;

      // change from current genre to trackGenre
      customPlaylist = customPlaylist.filter((item) => item !== videoId);
      tracks[currentGenre][index].availableAction = "add";
      playlistTracks = playlistTracks.filter(
        (item) => item.YouTubeId !== videoId
      );

      setState((state) => ({
        ...state,
        tracks,
        customPlaylist,
        playlistTracks,
      }));

      // Return to currentSong if playlist becomes empty
      if (customPlaylist.length === 0 && state.watchingPlaylist === true) {
        let watchingPlaylist = false;
        setState((state) => ({ ...state, watchingPlaylist }));
      }
    }
    // Add to custom Playlist
    else if (customPlaylist.includes(videoId) === false) {

      if (currentSong.YouTubeId === videoId) {
        currentSong.availableAction = "delete";
        setState((state) => ({ ...state, currentSong }));
      }
      customPlaylist = [...state.customPlaylist, videoId];

      track.availableAction = "delete";

      playlistTracks = [...state.playlistTracks, track];
      tracks[currentGenre][index].availableAction = "delete";

      setState((state) => ({
        ...state,
        tracks,
        customPlaylist,
        playlistTracks,
      }));
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

      var win = window.open(lyricLink, "_blank");
      win.focus();
    } else {
      return
    }
  };

  return {
    state,
    headers: state.headers,
    genre: state.genre,
    tracks: state.tracks,
    currentSong: state.currentSong,
    customPlaylist: state.customPlaylist,
    watchingPlaylist: state.watchingPlaylist,
    isLoading,
    playlistTracks: state.playlistTracks,
    clearPlaylist,
    viewPlaylist,
    fetchYoutube,
    fetchGenrePlaylist,
    getGenre,
    handleCurrentSong,
    getLyrics,
  };
};

export default useMelon;
