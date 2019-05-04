import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0% {
    transform: translateX(-50%) translateY(5px); 
  }
  50% {
    transform: translateX(-50%) translateY(-5px); 
  }
  100% {
    transform: translateX(-50%) translateY(5px); 
  }
`;

const ArrowIcon = styled.svg`
  position: absolute;
  left: 50%;
  bottom: -75px;
  z-index: 2;
  animation: ${bounce} 2s cubic-bezier(0, 0.31, 0.46, 1.64) infinite;
`;

const Arrow = props => {
  return (
    <ArrowIcon
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="31"
      viewBox="0 0 20 31"
    >
      <path
        fill="#F8FAFF"
        //fill-rule="evenodd"
        d="M19.5 20.69l-.754-.78-8.212 8.479V.5H9.466v27.89l-8.21-8.48-.756.78L10 30.5z"
      />
    </ArrowIcon>
  );
};
export default Arrow;
