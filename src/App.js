import "./App.css";
import Header from "./Components/Header.js";
import HomeGallery from "./Components/HomeGallery";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="galleryWrap">
        {/* <HomeGallery /> */}
        <div class="update">
          <h2>Just updating</h2>
        </div>
      </div>
      <Contact />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
