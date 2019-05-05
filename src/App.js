import React, { useEffect, Fragment } from "react";
import AOS from "aos";
import $ from "jquery";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "aos/dist/aos.css";
import "./assets/styles/main.scss";

const App = () => {
  useEffect(() => {
    AOS.init();
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
    <Fragment>
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
    </Fragment>
  );
};

export default App;
