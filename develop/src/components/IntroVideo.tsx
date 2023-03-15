import React from "react";
import YouTube from "react-youtube";

function IntroVideo() {
  return (
    <div className="IntroVideo" id="item_0">
      紹介ビデオ
      <YouTube videoId="lTRiuFIWV54" style={{ textAlign: "center" }} />
    </div>
  );
}

export default IntroVideo;
