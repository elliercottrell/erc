import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactWrap">
      <div className="contactText">
        <Link to="/" className=""></Link>
        <div className="heading">
          <h2>Contact</h2>
        </div>
        <div className="text">
          <a href="mailto:erc.ink.drawing@gmail.com">
            <p>erc.draw@gmail.com</p>
          </a>

          <a
            href="https://www.instagram.com/erc.ink/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <p>instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
