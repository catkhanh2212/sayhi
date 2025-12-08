import React from "react";
import Lottie from "lottie-react";
import animation from "../../../public/animations/animal.json";

function Animal() {
  return (
    <Lottie
      animationData={animation}
      loop={true}
      autoplay={true}
      style={{ width: 200, opacity: 0.8 }}
    />
  );
}

export default Animal;
