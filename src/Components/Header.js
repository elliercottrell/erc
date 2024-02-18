import { Link } from "react-router-dom";
import "./Header.css";
import Popup from "./Popup";
import { useState } from "react";

function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="headerWrap">
      <Link to="/" className="ercTitleLink">
        <h1 className="ercTitle">ERC</h1>
      </Link>
      <div className="myPopup">
        <button className="open-btn" onClick={() => setButtonPopup(true)}>
          Help
        </button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h2>Hiya, welcome to my playground</h2>
          <p>
            This is where I put all of my exploring, so play around. Just hit an
            image to see its collection,or to make it bigger or smaller, and hit
            the ERC to come back from anywhere. Drop me a message if you like
            anything..
          </p>
        </Popup>
      </div>
    </div>
  );
}

export default Header;
