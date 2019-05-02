import React, { useEffect } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./assets/styles/main.scss";

const App = () => {
  useEffect(() => {
    window.onload = function() {
      let mainNavLinks = document.querySelectorAll("nav a.nav-link");
      let navElement = document.querySelector("nav");

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

      window.scrollY > navElement.clientHeight &&
        navElement.classList.add("sticky");
        
      window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;
        fromTop > navElement.clientHeight
          ? navElement.classList.add("sticky")
          : navElement.classList.remove("sticky");

        mainNavLinks.forEach(link => {
          let section = document.querySelector(link.hash);

          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.clientHeight > fromTop
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
    };
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
