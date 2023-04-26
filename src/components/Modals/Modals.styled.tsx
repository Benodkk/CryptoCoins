import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(4, 7, 46, 0.8);
  z-index: 3;
  width: 100vw;
  height: 100vh;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.backgroundSecond};
  min-width: 500px;
  padding: 20px;
  border-radius: 20px;
  font-weight: 700;
`;

export const StyledModalHeadRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLogoRow = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 700;
  margin: 10px 0 20px;
  img {
    width: 40px;
  }
`;
export const StyledActionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledActionCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  row-gap: 10px;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  &:focus {
    background-color: ${(props) => props.theme.colors.interaction};
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
  background-color: #ffffff;
  border: none;
  width: 80px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.interaction};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.interaction};
    transform: scale(0.9);
  }
`;

export const CloseButton = styled.img`
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
`;