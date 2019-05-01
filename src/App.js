import React, { useEffect } from "react";
import $ from "jquery";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./assets/styles/main.scss";

const App = () => {
  const handleScroll = () => {
    var scroll = $(window).scrollTop();
    var height = $(".navbar").innerHeight();
    scroll >= height
      ? $(".navbar").addClass("sticky")
      : $(".navbar").removeClass("sticky");
  };

  useEffect(() => {
    handleScroll();
    $(".nav-link").on("click", function(e) {
      e.preventDefault();
      $(document).off("scroll");
      $(".nav-link").each(function() {
        $(this).removeClass("active");
      });
      $(this).addClass("active");
    });

    window.addEventListener("scroll", handleScroll);
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
