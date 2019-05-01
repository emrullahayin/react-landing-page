import React from "react";
import bgImg from "../assets/img/bg-home.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-home"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-overlay" />
    </section>
  );
};

export default Home;
