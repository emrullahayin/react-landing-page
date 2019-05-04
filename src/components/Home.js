import React from "react";
import bgImg from "../assets/img/bg-home.jpg";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 138px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  background-attachment: fixed;
  background-image: url(${bgImg});

  @media (min-width: 992px) {
    height: 100vh;
    max-height: 720px;
  }

  &:after {
    content: "";
    background: linear-gradient(33deg, #8400ff, #413bff);
    opacity: 0.9;
    position: absolute;
    height: 100%;
    width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;

    @media (min-width: 992px) {
      background-image: linear-gradient(62deg, #8400ff, #413bff);
    }
  }
`;

const Home = () => {
  return <Section id="home" />;
};

export default Home;
