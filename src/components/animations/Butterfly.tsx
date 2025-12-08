import React from "react";
import Lottie from "lottie-react";
import animation from "../../../public/animations/butterfly.json";
import loading from "../../../public/animations/loading.json";
import { Box } from "@mui/material";

function Butterfly() {
  return (
    <Box sx={{ position: "relative" }}>
      <Lottie
        animationData={animation}
        loop={true}
        autoplay={true}
        style={{ width: 200, opacity: 0.8 }}
      />
      <Lottie
        animationData={loading}
        loop={true}
        autoplay={true}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 220,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}

export default Butterfly;
