import React from "react";

import bgImg from "../assets/img/bg-home.jpg";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding-top: 138px;
  padding-bottom: 288px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url(${bgImg});

  @media (min-width: 992px) {
    max-height: 720px;
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 279px;
    padding-bottom: 271px;
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
  font-weight: 300;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 1.55;
  margin-bottom: 23px;

  @media (min-width: 992px) {
    font-size: 38px;
    line-height: 1.39;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h5`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.83;
  text-align: center;
  color: #ffffff;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <div className="container">
        <HomeTitle>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </HomeTitle>
        <SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </SubTitle>
      </div>
    </Section>
  );
};

export default Home;
