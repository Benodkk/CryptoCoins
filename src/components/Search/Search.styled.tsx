import styled from "styled-components";

interface Props {
  active: boolean;
}

export const StyledBomba = styled.div<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 200%;
  background-color: rgb(0, 6, 68);
  align-self: flex-start;
  justify-self: flex-end;
  padding: 15px 0 10px;
  left: -100%;
  color: white;
  box-shadow: 2px 2px 5px 2px rgb(15, 16, 32);
  transition: 0.5s;
  transform: ${({ active }) =>
    active ? "translateY(-15px)" : "translateY(-130%)"};
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

export const StyledSymbole = styled.div`
  font-weight: 500;
`;

export const StyledOneResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    background-color: rgb(4, 7, 46);
  }
`;

export const StyledOneResultDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
