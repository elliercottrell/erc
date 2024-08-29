import { Link } from "react-router-dom";
import "./Substack.css";

function Substack() {
  return (
    <div className="substackWrap">
      <div className="substackText">
        <div className="substackHeading">
          <Link to="/substack" className="">
            <h2>Substack</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Substack;
