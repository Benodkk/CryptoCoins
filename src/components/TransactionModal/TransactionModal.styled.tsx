import styled, { keyframes } from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundTransparent};
  z-index: 3;
  width: 100vw;
  height: 100vh;
`;

// Render modal

const show = keyframes`
0%{
  opacity: 0;
}
100% {
  opacity: 1;
}`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.backgroundSecond};
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  font-weight: 700;
  animation: ${show} 1s;
  @media ${devices.tablet} {
    width: auto;
    min-width: 500px;
    padding: 20px;
    border-radius: 20px;
  }
`;

export const StyledModalHeadRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLogoRow = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0 10px;
  img {
    width: 35px;
  }
  @media ${devices.tablet} {
    font-size: 24px;
    gap: 10px;
    margin: 10px 0 20px;
    img {
      width: 40px;
    }
  }
`;
export const StyledActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 140px;
  min-width: 353px;
  @media ${devices.tablet} {
    min-height: 172px;
    min-width: 470px;
  }
`;

export const StyledActionCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  row-gap: 10px;
  align-items: center;
  img {
    cursor: pointer;
    padding-left: 5px;
    max-height: 24px;
  }
  @media ${devices.tablet} {
    img {
      max-height: 30px;
    }
  }
`;

export const StyledInput = styled.input`
  padding: 6px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  &:focus {
    background-color: ${(props) => props.theme.colors.interaction};
  }
  :disabled {
    background-color: ${(props) => props.theme.colors.disabledInput};
  }
  @media ${devices.tablet} {
    padding: 8px;
    border-radius: 10px;
    font-size: 16px;
  }
`;

export const StyledButtonsCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledActionButton = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  border: none;
  width: 60px;
  height: 30px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  :disabled {
    color: black;
  }
  &:active {
    background-color: ${(props) => props.theme.colors.interaction};
    transform: scale(0.9);
  }
  @media ${devices.tablet} {
    width: 80px;
    height: 40px;
    border-radius: 8px;
    font-size: 14px;
    &:hover {
      background-color: ${(props) => props.theme.colors.interaction};
    }
  }
`;
