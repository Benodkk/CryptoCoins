import styled from "styled-components";

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

// RenderModal

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.backgroundSecond};
  min-width: 500px;
  padding: 20px;
  border-radius: 20px;
  gap: 15px;
`;

export const StyledModalHeadRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

export const StyledHeadInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    max-height: 40px;
  }
`;

export const StyledCoinSymbol = styled.div`
  font-weight: 500;
`;

export const StyledRow = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledPriceContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const StyledLabel = styled.label`
  font-weight: 700;
`;

interface StyledPriceProps {
  positive: boolean;
}

export const StyledPrice = styled.div<StyledPriceProps>`
  font-weight: 700;
  color: ${({ positive }) => (positive ? "rgb(0, 220, 0)" : "red")};
`;

export const StyledButtonRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTransactionButton = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  justify-content: center;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 16px;
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
