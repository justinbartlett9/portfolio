import React from "react";
import { MediaBox } from "react-materialize";
import login from "../images/capstone/login.png";
import ownerdashboard from "../images/capstone/ownerdashboard.png";
import userprofile from "../images/capstone/userprofile.png";
import useraccounts from "../images/capstone/useraccounts.png";
import userinventory from "../images/capstone/userinventory.png";
import inventorydetails from "../images/capstone/inventorydetails.png";
import ticketdetails from "../images/capstone/ticketdetails.png";

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
              Inventory Management System using MERN Stack
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
              <img src={login} alt="login page" width={"100%"} />
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
              <img src={ownerdashboard} alt="dashboard" width={"100%"} />
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
              <img src={userprofile} alt="profile page" width={"100%"} />
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
              <img src={useraccounts} alt="account list page" width={"100%"} />
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
              <img src={userinventory} alt="inventory page" width={"100%"} />
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
                src={inventorydetails}
                alt="inventory details page"
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
                src={ticketdetails}
                alt="admin ticket details page"
                width={"100%"}
              />
            </MediaBox>
          </div>
        </div>
      </div>
    </div>
  );
}
