import styled from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;

// Overview

export const StyledOverviewContainer = styled.section`
  width: 100%;
  background: linear-gradient(rgb(49, 43, 182), rgb(0, 6, 68));
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledOverview = styled.section`
  margin-top: 70px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 1024px;
  height: 50vh;
  gap: 50px;
`;

interface StyledLogOutProps {
  scroll: boolean;
}

export const StyledLogOutContainer = styled.div<StyledLogOutProps>`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  opacity: ${({ scroll }) => (scroll ? 0 : 1)};
  transition: 0.3s;
  font-weight: 500;
  strong {
    font-weight: 600;
  }
`;

export const StyledLogOut = styled.div`
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(2px);
    text-shadow: 0.4px 0.4px 1px white;
  }
`;

export const StyledOneStatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    font-size: 40px;
  }
`;

// transaction history

export const StyledTransactionHistory = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
`;

export const StyledTransactionsHeader = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(7, 1fr);
  width: 1024px;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid white;
`;

export const StyledOneTransaction = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(7, 1fr);
  width: 1024px;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid white;
  &:hover {
    background-color: rgb(4, 7, 46);
  }
  &:last-child {
    border-bottom: none;
  }
`;

interface StyledChangeTdProps {
  buy: boolean;
}

export const StyledChangeTd = styled.td<StyledChangeTdProps>`
  color: ${({ buy }) => (buy ? "green" : "red")};
`;

export const StyledButtonsContainer = styled.td`
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
  &:hover {
    background-color: rgb(4, 7, 46);
  }
  td {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
`;
