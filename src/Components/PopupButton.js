import React from "react";
import "./Popup.css";
import Popup from "./Popup";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import PopupTextHome from "./PopupTextHome";
import PopupTextOne from "./PopupTextOne";
import PopupTextTwo from "./PopupTextTwo";
import PopupTextThree from "./PopupTextThree";
import PopupTextFour from "./PopupTextFour";

function PopupButton() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const location = useLocation();
  const myLocation = location.pathname;

  if (myLocation === "/substack") {
    return (
      <div className="myPopup">
        <button className="open-btn" onClick={() => setButtonPopup(true)}>
          About Writing
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <PopupTextOne />
        </Popup>
      </div>
    );
  }
  if (myLocation === "/work") {
    return (
      <div className="myPopup">
        <button className="open-btn" onClick={() => setButtonPopup(true)}>
          Works
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <PopupTextTwo />
        </Popup>
      </div>
    );
  }
  if (myLocation === "/amsterdam") {
    return (
      <div className="myPopup">
        <button className="open-btn" onClick={() => setButtonPopup(true)}>
          Amsterdam
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <PopupTextThree />
        </Popup>
      </div>
    );
  }
  if (myLocation === "/print") {
    return (
      <div className="myPopup">
        <button className="open-btn" onClick={() => setButtonPopup(true)}>
          Print
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <PopupTextFour />
        </Popup>
      </div>
    );
  } else {
    return (
      <div className="myPopup">
        <button className="open-btn" onClick={() => setButtonPopup(true)}>
          About Drawing
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <PopupTextHome />
        </Popup>
      </div>
    );
  }
}

export default PopupButton;
