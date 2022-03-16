import React from "react";
import { MediaBox } from "react-materialize";
import employee from "../images/employee.png";
import employee2 from "../images/employee2.png";
import employee3 from "../images/employee3.png";

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
            <h2 className="subheading">
              Employee Management App using MERN Stack
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="container z-depth-3" style={{ background: "white" }}>
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
              <img
                src={employee}
                alt="employee management app"
                width={"100%"}
              />
            </MediaBox>
          </div>
        </div>
        <div className="row">
          <div className="container z-depth-3" style={{ background: "white" }}>
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
              <img
                src={employee2}
                alt="employee management app"
                width={"100%"}
              />
            </MediaBox>
          </div>
        </div>
        <div className="row">
          <div className="container z-depth-3" style={{ background: "white" }}>
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
              <img
                src={employee3}
                alt="employee management app"
                width={"100%"}
              />
            </MediaBox>
          </div>
        </div>
      </div>
    </div>
  );
}
