import React from "react";

import styled from "styled-components";

const Section = styled.section`
  padding: 30px 0 225px;
`;
const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 300;
  line-height: normal;
  color: #1b5cce;
  text-align: center;
  margin-bottom: 2px;
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  color: #aeaeae;
  margin-bottom: 50px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  margin-bottom: 30px;
`;

const BoxTitle = styled.h4`
  font-size: 18px;
  font-weight: 300;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
`;

const About = () => {
  return (
    <Section id="about">
      <div className="container">
        <SectionTitle>Lorem ipsum dolor sit amet</SectionTitle>
        <SubTitle>Lorem ipsum dolor sit amet</SubTitle>
        <div class="row">
          <div class="col-lg-4">
            <Box data-aos="fade-right">
              <IconWrap />
              <BoxTitle>Declarative</BoxTitle>
              <Text>
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes.
              </Text>
            </Box>
          </div>
          <div class="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap />
              <BoxTitle>Component-Based</BoxTitle>
              <Text>
                Since component logic is written in JavaScript instead of
                templates, you can easily pass rich data through your app and
                keep state out of the DOM.
              </Text>
            </Box>
          </div>
          <div class="col-lg-4">
            <Box data-aos="fade-left">
              <IconWrap />
              <BoxTitle>Learn Once, Write Anywhere</BoxTitle>
              <Text>
                We don’t make assumptions about the rest of your technology
                stack, so you can develop new features in React without
                rewriting existing code.
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
