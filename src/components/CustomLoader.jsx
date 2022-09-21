import React from "react";
import loaderImg from "../img/loader.gif";
import "../scss/loader.scss";

const CustomLoader = () => {
  return (
    <div className="loader-container">
      <img src={loaderImg} alt="loader" height="50" widht="50" loading="lazy" />
    </div>
  );
};

export default CustomLoader;
