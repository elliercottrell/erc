import "./App.css";
import Header from "./Components/Header.js";
import Drawing from "./Components/Drawing.js";
import Footer from "./Components/Footer";
import About from "./Components/About.js";
import Form from "./Components/Form";
import Accordion from "./Components/Accordion.jsx";
import Writing from "./Components/Writing.js";

function App() {
  const data = [
    {
      id: 0,
      label: "DRAWING",
      renderContent: () => <Drawing />,
    },
    {
      id: 1,
      label: "WRITING",
      renderContent: () => <Writing />,
    },
    {
      id: 2,
      label: "ABOUT",
      renderContent: () => <About />,
    },
    {
      id: 3,
      label: "MESSAGE",
      renderContent: () => <Form />,
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="galleryWrap">
        <Accordion items={data} keepOthersOpen={false} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
