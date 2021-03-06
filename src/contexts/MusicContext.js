import React, { useState, useEffect } from "react";

import axios from "axios";
import youtube from "../apis/youtube";

const Context = React.createContext([{}, () => {}]);

export const MusicProvider = (props) => {
  const [state, setState] = useState({
    genre: { path: "DM0000", id: "top100", text: "Top 100" },
    tracks: {},
    customPlaylist: [],
    playlistTracks: [],
    currentSong: {},
    watchingPlaylist: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  // Fetch songs via Melon based on selected genre
  const fetchPlaylist = async ({ id, path }) => {
    if (!state.tracks[id] && !isLoading) {
      let config = {};

      let res = "";
      if (window.screen.width < 767) {
        res = await axios(
          `https://cors-anywhere.herokuapp.com/https://m2.melon.com/cds/main/mobile4web/main_chart.htm
          `,
          config
        );

        getTracks(res.data);
      } else {
        res = await axios(
          `https://cors-anywhere.herokuapp.com/https://www.melon.com/chart/day/index.htm?classCd=${path}`,
          config
        );
        getTracks(res.data);
      }
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

    if (window.screen.width < 767) {
      let rankAr = div.querySelectorAll("strong.rank");
      let titleAr = div.querySelectorAll(".title");
      let artistAr = div.querySelectorAll(".name");
      let artAr = div.querySelectorAll(".inner>span");
      let currentGenre = [];

      rankAr.forEach(function (ranking, index) {
        let rank = ranking.textContent;
        let title = titleAr[index].textContent;
        let artist = artistAr[index].textContent;
        let album = "";
        let art = artAr[index].style.backgroundImage;
        art = art.replace('url("//', "https://");
        art = art.replace('")', "");

        console.log(art);

        let YouTubeId = "";
        let key = ranking.textContent;
        let availableAction = "add";
        let trackGenre = state.genre.id;
        let trackIndex = index;

        let currentTrack = {
          rank,
          title,
          artist,
          album,
          art,
          YouTubeId,
          key,
          availableAction,
          trackGenre,
          trackIndex,
        };

        // defaults on initial load to #1 song
        if (typeof state.currentSong.title === "undefined" && index === 0) {
          handleCurrentSong(currentTrack, index, "play");
        }

        currentGenre.push(currentTrack);
      });

      let tracks = { ...state.tracks, [state.genre.id]: currentGenre };
      setState((state) => ({ ...state, tracks }));
    } else {
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
        let trackGenre = state.genre.id;
        let trackIndex = index;

        console.log(art);

        let currentTrack = {
          rank,
          title,
          artist,
          album,
          art,
          YouTubeId,
          key,
          availableAction,
          trackGenre,
          trackIndex,
        };

        // defaults on initial load to #1 song
        if (typeof state.currentSong.title === "undefined" && index === 0) {
          handleCurrentSong(currentTrack, index, "play");
        }

        currentGenre.push(currentTrack);
      });

      let tracks = { ...state.tracks, [state.genre.id]: currentGenre };
      setState((state) => ({ ...state, tracks }));
    }
  };

  const handleCurrentSong = async (track, index, action) => {
    let videoId;
    let customPlaylist = [...state.customPlaylist];
    let tracks = { ...state.tracks };
    let currentGenre = [state.genre.id];

    track.YouTubeId
      ? (videoId = track.YouTubeId)
      : (videoId = await fetchYoutube(track.artist, track.title));
    // (videoId = `${state.genre.id}.${index}`);

    // Check if fetch needed
    if (
      typeof tracks[currentGenre] !== "undefined" &&
      tracks[currentGenre][index].YouTubeId === ""
    ) {
      tracks[currentGenre][index].YouTubeId = videoId;
      setState((state) => ({ ...state, tracks }));
    }
    // Play current video
    if (action === "play") {
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

      setState((state) => ({ ...state, currentSong }));
    }

    // Delete from custom playlist
    else if (customPlaylist.includes(videoId)) {
      customPlaylist = customPlaylist.filter((item) => item !== videoId);
      setState((state) => ({ ...state, customPlaylist }));

      tracks[currentGenre][index].availableAction = "add";

      setState((state) => ({ ...state, tracks }));
    }

    // Add to custom Playlist
    else if (customPlaylist.includes(videoId) === false) {
      customPlaylist = [...state.customPlaylist, videoId];
      setState((state) => ({ ...state, customPlaylist }));

      tracks[currentGenre][index].availableAction = "delete";

      setState((state) => ({ ...state, tracks }));
    }
  };

  useEffect(() => {
    if (isLoading === false) {
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
