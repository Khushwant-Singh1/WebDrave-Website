import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        margin: 0,
        padding: 0,
      }}
    >
      <spline-viewer
        loading-anim-type="spinner-small-dark"
        url="https://prod.spline.design/dBgM7heoEmjDSdB7/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          border: "none",
        }}
      ></spline-viewer>
    </div>
  );
};

export default App;
