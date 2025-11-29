import React from "react";
import { Intro, Footer, Careers, Toolbar } from "./pages";
import "./App.scss";
import "./index.css";

export default function App() {
  return (
    <>
      <Toolbar />
      <div className="home">
        <div id="intro" className="center-page">
          <Intro />
        </div>
        <div id="careers" className="center-page">
          <Careers />
        </div>
        <div id="footer" className="center-page">
          <Footer />
        </div>
      </div>
    </>
  );
}
