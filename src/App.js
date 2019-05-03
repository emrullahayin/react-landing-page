import React, { useEffect } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import $ from "jquery";

import "./assets/styles/main.scss";

const App = () => {
  useEffect(() => {
    let mainNavLinks = $("nav a.nav-link");
    let navElement = $("nav");
    let scrollTop = $(window).scrollTop();

    activeTab(scrollTop);

    mainNavLinks.on("click", function(event) {
      event.preventDefault();
      let target = $(event.target.hash);
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        100
      );
    });

    $(window).on("scroll", function() {
      let fromTop = $(window).scrollTop();
      activeTab(fromTop);
    });

    function activeTab(sTop) {
      sTop > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");

      mainNavLinks.each(function() {
        let section = $("" + this.hash + "");
        if (
          section.offset().top <= sTop &&
          section.offset().top + section.innerHeight() > sTop
        ) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    }
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
