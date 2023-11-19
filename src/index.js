import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ScrollToTop } from "react-router-scroll-to-top";
import ProjectOneGallery from "./Components/ProjectOneGallery";
import ProjectTwoGallery from "./Components/ProjectTwoGallery";
import ProjectThreeGallery from "./Components/ProjectThreeGallery";
import ProjectFourGallery from "./Components/ProjectFourGallery";
import ProjectFiveGallery from "./Components/ProjectFiveGallery";

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/morocco" element={<ProjectOneGallery />} />
          <Route path="/work" element={<ProjectTwoGallery />} />
          <Route path="/amsterdam" element={<ProjectThreeGallery />} />
          <Route path="/pjf" element={<ProjectFourGallery />} />
          <Route path="/print" element={<ProjectFiveGallery />} />
        </Routes>
      </div>
    </Router>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
