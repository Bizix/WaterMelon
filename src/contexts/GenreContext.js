import React, { useState } from "react";

const Context = React.createContext([{}, () => {}]);

export const GenreProvider = (props) => {
  const [state, setState] = useState({
    genre: { path: "DM0000", id: "top100", text: "Top 100" },
    tracks: {},
    customPlaylist: [],
    currentSong: {},
  });
  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
