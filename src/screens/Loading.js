import React from "react";

import logo from "../assets/images/icon.png";
import "../sass/_loading.scss";

const Loading = () => {
  return (
    <div class="flex justify-center items-center">
      <div
        class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        {/* <span class="visually-hidden">Loading...</span> */}
        <img className="visually-hidden" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Loading;
