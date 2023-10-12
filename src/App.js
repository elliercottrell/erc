import "./App.css";
import Header from "./Components/Header.js";
import HomeGallery from "./Components/HomeGallery";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Form from "./Components/Form";
import Popup from "./Components/Popup";
import { useState } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="galleryWrap">
        <div className="myPopup">
          <button className="open-btn" onClick={() => setButtonPopup(true)}>
            Hit me
          </button>

          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2>Hiya, welcome to my playground</h2>
            <p>
              This is where I put all of my experimenting, my sketchbook if I
              had one. So play around. Just hit an image to see its collection
              and hit the ERC to come back from anywhere. Drop me a message if
              you get bored..
            </p>
          </Popup>
        </div>

        <HomeGallery />
      </div>
      <Contact />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
