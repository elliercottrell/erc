import "./App.css";
import Header from "./Components/Header.js";
import ProjectTwo from "./Components/ProjectTwo.js";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="galleryWrap">
        <ProjectTwo />
      </div>
      <Contact />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
