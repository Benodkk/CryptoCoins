import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  /* font-weight: 700; */
`;

export const StyledHeader = styled.div`
  width: 1024px;
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledLogo = styled.h1``;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 40px;
`;

export const StyledNavigate = styled.div`
  /* border-left: 1px solid white; */
  /* padding: 0 20px; */
  cursor: pointer;
  &:first-child {
    border-left: 0;
  }
`;
