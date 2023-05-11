import styled, { keyframes } from "styled-components";

export const StyledAnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const stroke = keyframes`
 100% {
        stroke-dashoffset: 0;
    }`;

const scale = keyframes`
      0%, 100% {
        transform: none;
    }

    50% {
        transform: scale3d(1.1, 1.1, 1);
    }
`;

const fill = keyframes`
       100% {
        box-shadow: inset 0px 0px 0px 30px white;
    }
`;

export const StyledSVG = styled.svg`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  stroke-width: 3;
  stroke: white;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px white;
  animation: ${fill} 0.4s ease-in-out 0.4s forwards,
    ${scale} 0.3s ease-in-out 0.9s both;
  /* position: relative;
  top: 5px;
  right: 5px; */
  margin: 0 auto;
`;

export const StyledCheckmarkCircle = styled.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 3;
  stroke-miterlimit: 10;
  stroke: white;
  fill: rgb(49, 43, 182);
  animation: ${stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`;

export const StyledCheckmarkCheck = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`;

const showSign = keyframes`
       0% {
        opacity: 0;
          transform: translateY(10px);
    }
       100% {
        opacity: 1;
          transform: translateY(0px);
    }
`;

export const StyledTransactionConfirmation = styled.div`
  /* transform: translateY(10px); */
  animation: ${showSign} 1s;
`;
