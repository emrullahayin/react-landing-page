import React, { useEffect } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./assets/styles/main.scss";

const App = () => {
  useEffect(() => {
    let mainNavLinks = document.querySelectorAll("nav a.nav-link");
    let navElement = document.querySelector("nav");
    window.onload = function() {
      window.scrollY > navElement.offsetHeight &&
        navElement.classList.add("sticky");
    };

    mainNavLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        let target = document.querySelector(event.target.hash);
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });

    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;
      fromTop > navElement.offsetHeight
        ? navElement.classList.add("sticky")
        : navElement.classList.remove("sticky");

      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  });

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;
