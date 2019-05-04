import React from "react";

import bgImg from "../assets/img/bg-home.jpg";
import styled from "styled-components";

const Section = styled.section`
  padding-left: 110px;
  padding-right: 110px;
  padding-top: 279px;
  padding-bottom: 271px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  background-attachment: fixed;
  background-image: url(${bgImg});

  @media (min-width: 992px) {
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
  .container {
    z-index: 1;
    user-select: none;
    cursor: default;
  }
`;

const HomeTitle = styled.h1`
  font-size: 38px;
  font-weight: 300;
  line-height: 1.39;
  text-align: center;
  color: #fff;
`;

const SubTitle = styled.h5`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.83;
  text-align: center;
  color: #ffffff;
  padding: 0 340px;
`;

const Home = () => {
  return (
    <Section id="home">
      <div className="container">
        <HomeTitle className="item">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </HomeTitle>
        <SubTitle className="item">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </SubTitle>
      </div>
    </Section>
  );
};

export default Home;
