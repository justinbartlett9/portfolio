import React from "react";
import resume from "../images/resume.pdf";

export default function () {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#50A6B9, #A7D2DC)",
        minHeight: "100%",
        minWidth: "100%",
        display: "flex",
        position: "absolute",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="subheading">Resume</h2>
          </div>
        </div>
        <div className="row">
          <div className="container z-depth-3" style={{ background: "white" }}>
            <iframe
              src={resume}
              style={{ minHeight: "100vh", minWidth: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
