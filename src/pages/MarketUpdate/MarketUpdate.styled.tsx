import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 10px;
  background: linear-gradient(
    ${(props) => props.theme.colors.backgroundSecond},
    ${(props) => props.theme.colors.background},
    ${(props) => props.theme.colors.background},
    ${(props) => props.theme.colors.background}
  );
  min-height: calc(100vh - 54px);
  @media ${devices.tablet} {
    min-height: calc(100vh - 60px);
  }
  @media ${devices.desktop} {
    padding: 80px 0 20px;
  }
`;

export const StyledSectionName = styled.h2`
  font-size: 40px;
  padding: 30px 0;
`;

// SwitchPage

interface ButtonsContainerProps {
  show: boolean;
}

export const StyledButtonsContainer = styled.div<ButtonsContainerProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  gap: 5px;
  padding: 15px 0;
  @media ${devices.desktop} {
    gap: 10px;
    padding: 30px 0;
  }
`;

interface ButtonProps {
  selected?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  font-size: 18px;
  font-weight: 500;
  padding: 6px;
  border: none;
  color: ${({ selected }) => (!selected ? "white" : "rgb(0,6,68)")};
  background-color: ${({ selected }) => (!selected ? "rgb(0,6,68)" : "white")};
  cursor: pointer;
  &:hover {
    color: rgb(0, 6, 68);
    background-color: white;
  }
  @media ${devices.tablet} {
    font-size: 24px;
    padding: 8px;
  }
`;
