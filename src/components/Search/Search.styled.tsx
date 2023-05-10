import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

interface Props {
  active: boolean;
}

export const StyledSearchContainer = styled.div<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
  align-self: flex-start;
  justify-self: flex-end;
  padding: 15px 0 10px;
  left: 0;
  color: white;
  box-shadow: ${(props) => props.theme.boxShadow.dark};
  transition: 0.5s;
  z-index: 1;
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transform: ${({ active }) =>
    active ? "translateY(-15px)" : "translateY(-130%)"};
  @media ${devices.tablet} {
    width: 200%;
    left: -100%;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 15px;
`;

export const StyledInputSearch = styled.input`
  padding: 8px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
  &:focus {
    background-color: ${(props) => props.theme.colors.interaction};
  }
`;

export const StyledSearchResult = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const StyledSymbol = styled.div`
  font-weight: 500;
`;

export const StyledOneResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverDark};
  }
`;

export const StyledOneResultDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
