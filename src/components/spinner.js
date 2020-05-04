import React from "react";

const spinner = () => {
  return (
    <>
      <div id="playlist_container">
        <div className="fa-3x">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      </div>
    </>
  );
};

export default spinner;
