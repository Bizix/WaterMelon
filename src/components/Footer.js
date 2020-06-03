import React from "react";

const Footer = () => {
  let yt = "https://www.youtube.com/t/terms";
  let google = "https://policies.google.com/privacy";

  let buttonHelper = (link) => {
    let win = window.open(link, "_blank");
    win.focus();
  };

  return (
    <div id="footer">
      <div>WaterMelon uses YouTube API Services</div>
      <div id="policyButtons">
        <div onClick={() => buttonHelper(google)}>Google Privacy Policy</div>
        <span id="divide">    |    </span>
        <div onClick={() => buttonHelper(yt)}> YouTube ToS</div>
      </div>
    </div>
  );
};

export default Footer;
