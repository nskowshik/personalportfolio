import React, { useState, useEffect, useRef } from "react";
import { Intro, Footer, Careers, Toolbar } from "./pages";
import {  ScrollArrow } from "./components";
import { PAGES } from "./constants";
import "./App.scss";
import "./index.css";

const pageComponents = {
  Intro,
  Careers,
  Footer,
};

export default function App() {
  const [currentSection, setCurrentSection] = useState("intro");
  useEffect(() => {
    const observerOptions = {
      root: document.querySelector(".home"),
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const sections = document.querySelectorAll(".center-page");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const getArrowProps = () => {
    const currentIndex = PAGES.findIndex((p) => p.id === currentSection);
    if (currentIndex === -1) return {};

    const nextIndex = (currentIndex + 1) % PAGES.length;
    const targetPage = PAGES[nextIndex];

    // Use the last page's direction for the wrap-around
    const direction = currentIndex === PAGES.length - 1 ? "up" : "down";
    const targetId = direction === "up" ? PAGES[0].id : targetPage.id;

    return { targetId, direction };
  };

  return (
    <>
      <Toolbar />
      <div className="home">
        <ScrollArrow {...getArrowProps()} />
        {PAGES.map((page) => (
            <div key={page.id} id={page.id} className="center-page relative">
              {React.createElement(pageComponents[page.name])}
            </div>
        ))}
      </div>
    </>
  );
}
