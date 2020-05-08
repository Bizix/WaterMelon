import React, { useState, useEffect } from "react";

import axios from "axios";
import youtube from "../apis/youtube";


const Context = React.createContext([{}, () => {}]);

export const MusicProvider = (props) => {

  const [state, setState] = useState({
    genre: { path: "DM0000", id: "top100", text: "Top 100" },
    tracks: {},
    customPlaylist: [],
    currentSong: {},
  });

  const [isLoading, setIsLoading] = useState(false);

  // Fetch songs via Melon based on selected genre
  const fetchPlaylist = async ({ id, path }) => {
    console.log(isLoading);
    if (!state.tracks[id] && !isLoading) {
      console.log(`need to fetch`);
      const res = await axios(
        `http://cors-anywhere.herokuapp.com/http://www.melon.com/chart/day/index.htm?classCd=${path}`
      );

      getTracks(res.data);
    }

    setIsLoading(false);
  };

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

  // Update songs stored in context
  const getTracks = (res) => {
    let div = document.createElement("div");

    div.innerHTML = res;

    let rankAr = div.querySelectorAll("#lst50 .rank, #lst100 .rank");
    let titleAr = div.querySelectorAll(".rank01>span>a");
    let artistAr = div.querySelectorAll(".rank02>span>a");
    let albumAr = div.querySelectorAll(".rank03>a");
    let artAr = div.querySelectorAll(".image_typeAll>img");
    let keyAr = div.querySelectorAll("tr[data-song-no]");

    let currentGenre = [];

    rankAr.forEach(function (ranking, index) {
      let rank = ranking.textContent;
      let title = titleAr[index].textContent;
      let artist = artistAr[index].textContent;
      let album = albumAr[index].textContent;
      let art = artAr[index].src;
      let YouTubeId = "";
      let key = keyAr[index].getAttribute("data-song-no");
      let availableAction = "add";

      let currentTrack = {
        rank,
        title,
        artist,
        album,
        art,
        YouTubeId,
        key,
        availableAction,
      };

      // defaults on initial load to #1 song
      if (typeof state.currentSong.title === "undefined" && index === 0) {
        handleCurrentSong(currentTrack, index, "play");
      }

      currentGenre.push(currentTrack);
    });

    // new but not working
    let tracks = { ...state.tracks, [state.genre.id]: currentGenre };
    setState((state) => ({ ...state, tracks }));
  };

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

   

  useEffect(() => {
    console.log(isLoading);
    if (isLoading === false) {
      console.log(state.genre);
      setIsLoading(true);
      fetchPlaylist(state.genre);
    }
  }, [state.genre]);

  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
