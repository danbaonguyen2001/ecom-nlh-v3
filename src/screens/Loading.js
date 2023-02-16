import React from "react";

import logo from "../assets/images/icon.png";
import "../sass/_loading.scss";

const Loading = () => {
  return (
    <div className="loading_wrap">
      <div class="lds-roller">
        <div>
          <img className="loader__logo" src={logo} />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
