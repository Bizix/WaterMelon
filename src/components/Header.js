import React from "react";
import useMelon from "../components/useMelon";

import Logo from "../assets/watermelon_04.png";

const Header = () => {
  const {getGenre } = useMelon();

  let headers = [
    { id: "top100", path: "DM0000", text: "Top 100" },
    { id: "kpop", path: "GN0200", text: "K-Pop" },
    { id: "rap", path: "GN0300", text: "Rap/Hiphop" },
    { id: "rb", path: "GN0400", text: "R&B" },
    { id: "indie", path: "GN0500", text: "Indie" },
    { id: "rock", path: "GN0600", text: "Rock" },
    { id: "balad", path: "GN0100", text: "Balads" },
    { id: "trot", path: "GN0700", text: "Trot" },
    { id: "folk", path: "GN0800", text: "Folk" },
  ]

  return (
    <div id="header" className="dark">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="genre_container">
        {headers.map((header) => (
          <div
            id={header.id}
            className="genre"
            key={header.path}
            onClick={() => {
             getGenre(header);
            }}
          >
            {header.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
