import React from "react";
import { MediaBox } from "react-materialize";
import pokedex from "../images/pokedex.png";
import pokedex2 from "../images/pokedex2.png";

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
            <h2 className="subheading">Pokedex App built using SvelteKit</h2>
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
              <img src={pokedex} alt="pokedex app" width={"100%"} />
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
              <img src={pokedex2} alt="pokedex app" width={"100%"} />
            </MediaBox>
          </div>
        </div>
      </div>
    </div>
  );
}
