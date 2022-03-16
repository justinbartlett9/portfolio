import React from "react";
import { MediaBox } from "react-materialize";
import transcript from "../images/transcript.png";

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
            <h2 className="subheading">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="container z-depth-3"
            style={{ background: "white", minHeight: "10vw", minWidth: "59vw" }}
          >
            <h5
              className="left-align"
              style={{ marginLeft: "10px", paddingTop: "10px" }}
            >
              My name is Justin Bartlett and I am a graduate of George Brown
              College's Computer Programmer Analyst program. I also have a
              bachelor's degree in Geography from University of Toronto.
              <br />
              <br />
              My main focus is creating fullstack web applications using
              JavaScript, using frameworks such as React and Svelte. However, I
              am also proficient with Java, C#, and Python. Please take a look
              at my work examples to see what I have created in the past.
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className="subheading">Career Goal</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="container z-depth-3"
            style={{ background: "white", minHeight: "10vw", minWidth: "59vw" }}
          >
            <h5
              className="left-align"
              style={{ marginLeft: "10px", paddingTop: "10px" }}
            >
              To break into the web development industry and start gaining
              professional experience while putting my current skills to use.
              <br />
              <br />
              To join a development team where I am the best choice for the role
              I am in.
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className="subheading">Academic History</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="container z-depth-3"
            style={{ background: "white", minHeight: "10vw", minWidth: "59vw" }}
          >
            <MediaBox
              id="MediaBox_9"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img src={transcript} alt="transcript" width={"100%"} />
            </MediaBox>
          </div>
        </div>
      </div>
    </div>
  );
}
