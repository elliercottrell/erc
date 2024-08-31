import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ScrollToTop } from "react-router-scroll-to-top";
import WritingGallery from "./Components/WritingGallery";
import DrawingGallery from "./Components/DrawingGallery";

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/substack" element={<WritingGallery />} />
          <Route path="/work" element={<DrawingGallery />} />
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
