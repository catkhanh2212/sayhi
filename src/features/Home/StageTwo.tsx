import React from "react";

function StageTwo() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/starry.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
      </div>
    </div>
  );
}

export default StageTwo;
