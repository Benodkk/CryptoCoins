import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

interface HeaderProps {
  scroll: boolean;
}

export const StyledHeaderContainer = styled.header<HeaderProps>`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: ${({ scroll }) =>
    scroll ? (props) => props.theme.colors.background : "none"};
  box-shadow: ${({ scroll }) =>
    scroll ? (props) => props.theme.boxShadow.dark : "none"};
  transition: 0.3s;
  top: 0;
`;

export const StyledHeader = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media ${devices.desktop} {
    width: 1024px;
    padding: 15px 0;
  }
`;

export const StyledLogo = styled.h1`
  cursor: pointer;
`;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 10px;

  @media ${devices.tablet} {
    position: relative;
    gap: 40px;
  }
`;

export const StyledNavigate = styled.div`
  cursor: pointer;
  transition: 0.2s;
  @media ${devices.desktop} {
    &:hover {
      transform: translateY(2px);
      text-shadow: 0.4px 0.4px 1px white;
    }
    &:active {
      transform: translateY(4px);
      transition: 0.2s;
    }
  }
`;
