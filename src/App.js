import React from "react";
import { Intro, Toolbar, Footer, Careers } from "./pages";
import "./App.scss";

export default function App() {
  return (
    <>
      <div className="home">
        <div className="center-page">
          <Intro />
        </div>
        <div className="center-page">
          <Careers />
        </div>
        <div className="center-page">
          <Footer />
        </div>
      </div>
    </>
  );
}
