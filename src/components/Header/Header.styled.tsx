import styled from "styled-components";

interface HeaderProps {
  scroll: boolean;
}

export const StyledHeaderContainer = styled.header<HeaderProps>`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: ${({ scroll }) => (scroll ? "rgb(0, 6, 68)" : "none")};
  box-shadow: ${({ scroll }) =>
    scroll ? "2px 2px 5px rgb(15, 16, 32)" : "none"};
  transition: 0.3s;
  top: 0;
`;

export const StyledHeader = styled.div`
  width: 1024px;
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledLogo = styled.h1`
  cursor: pointer;
`;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 40px;
`;

export const StyledNavigate = styled.div`
  cursor: pointer;
  &:first-child {
    border-left: 0;
  }
`;
