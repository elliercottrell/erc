import { Link } from "react-router-dom";
import "./Header.css";
import PopupButton from "./PopupButton";

function Header() {
  return (
    <div className="headerWrap">
      <Link to="/" className="ercTitleLink">
        <h1 className="ercTitle">ERC</h1>
      </Link>
      <PopupButton />
    </div>
  );
}

export default Header;
