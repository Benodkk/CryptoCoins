import styled from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;

// transaction history

export const StyledTransactionHistory = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
`;

export const StyledOneTransaction = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(7, 1fr);
  width: 1024px;
  gap: 15px;
  padding: 10px 0;
  font-weight: 700;
  border-bottom: 1px solid white;
  &:hover {
    background-color: rgb(4, 7, 46);
  }
  &:last-child {
    border-bottom: none;
  }
`;

interface StyledChangeDivProps {
  buy: boolean;
}

export const StyledChangeDiv = styled.div<StyledChangeDivProps>`
  color: ${({ buy }) => (buy ? "green" : "red")};
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const StyledButton = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 5px 10px;
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

// Coins overview

export const StyledCoinsOverview = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
`;

export const StyledCoinsTopHeader = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 2fr 2fr 2fr 1fr 2fr;
  text-align: center;
  width: 1024px;
  height: 50px;
  th {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-left: white 1px solid;
    padding: 0 5px;
    &:last-child {
      border-right: white 1px solid;
    }
  }
`;

export const StyledCoinsBottomHeader = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(11, 1fr);
  text-align: center;
  width: 1024px;
  height: 50px;
  border-bottom: 1px solid white;
  th {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-left: white 1px solid;
    &:last-child {
      border-right: white 1px solid;
    }
  }
`;

export const StyledCoinsRow = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(11, 1fr);
  text-align: center;
  width: 1024px;
  height: 50px;
  border-bottom: 1px solid white;
  td {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;
