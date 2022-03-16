import React from "react";
import { MediaBox } from "react-materialize";
import recipe from "../images/recipe.png";
import recipe2 from "../images/recipe2.png";
import recipe3 from "../images/recipe3.png";
import recipe4 from "../images/recipe4.png";

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
            <h2 className="subheading">Recipe App using SpringBoot</h2>
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
              <img src={recipe} alt="recipe app" width={"100%"} />
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
              <img src={recipe2} alt="recipe app" width={"100%"} />
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
              <img src={recipe3} alt="recipe app" width={"100%"} />
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
              <img src={recipe4} alt="recipe app" width={"100%"} />
            </MediaBox>
          </div>
        </div>
      </div>
    </div>
  );
}
