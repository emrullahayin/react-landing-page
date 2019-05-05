import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {
      transform: translate(-50%, 0); 
    }
    50% {
      transform: translate(-50%, 10px); 
    }
    100% {
      transform: translate(-50%, 0); 
    } 
`;

const Icon = styled.svg`
  position: absolute;
  left: 50%;
  bottom: -75px;
  z-index: 2;
  animation: pulse 2s infinite;
  animation: ${pulse} 2s cubic-bezier(0, 0.31, 0.46, 1.64) infinite;
`;

const Arrow = props => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="31"
      viewBox="0 0 20 31"
      fillRule="evenodd"
      {...props}
    >
      <path
        fill="#F8FAFF"
        //fill-rule="evenodd"
        d="M19.5 20.69l-.754-.78-8.212 8.479V.5H9.466v27.89l-8.21-8.48-.756.78L10 30.5z"
      />
    </Icon>
  );
};
export default Arrow;
