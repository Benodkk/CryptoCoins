import styled from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 40px;
  background: linear-gradient(
    ${(props) => props.theme.colors.backgroundSecond},
    ${(props) => props.theme.colors.background},
    ${(props) => props.theme.colors.background},
    ${(props) => props.theme.colors.background}
  );
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
  gap: 10px;
  padding: 30px 0;
`;

interface ButtonProps {
  selected?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  font-size: 24px;
  font-weight: 500;
  padding: 8px;
  border: none;
  color: ${({ selected }) => (!selected ? "white" : "rgb(0,6,68)")};
  background-color: ${({ selected }) => (!selected ? "rgb(0,6,68)" : "white")};
  cursor: pointer;
  &:hover {
    color: rgb(0, 6, 68);
    background-color: white;
  }
`;
