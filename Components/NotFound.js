import React from "react";
import Lottie from "react-lottie";
import NoJson from "../Assets/NoJson.json";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lottie">
      <Lottie options={defaultOptions} />
      <h2>Nothing found, start applying now !!</h2>
    </div>
  );
};

export default NotFound;
