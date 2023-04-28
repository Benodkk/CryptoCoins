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
  transition: 0.2s;
  &:hover {
    transform: translateY(2px);
    text-shadow: 0.4px 0.4px 1px white;
  }
`;

export const StyledOneStatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  div {
    font-size: 40px;
  }
`;
interface StyledOneStatValueProps {
  positive: boolean;
}
export const StyledOneStatValue = styled.div<StyledOneStatValueProps>`
  color: ${({ positive }) => (positive ? "green" : "red")};
`;

// tabs

export const StyledTabsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

interface StyledTabButtonProps {
  active: boolean;
}

export const StyledTabButton = styled.button<StyledTabButtonProps>`
  font-size: 20px;
  background-color: transparent;
  color: white;
  border: none;
  font-weight: 600;
  width: 220px;
  padding: 10px 10px 10px;
  border-bottom: ${({ active }) =>
    active ? "2px solid blue" : "2px solid white"};
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    padding: 13px 10px 7px;
    text-shadow: 0.4px 0.4px 1px white;
  }
`;
// transaction history

export const StyledTransactionHistory = styled.div`
  margin: 50px 0 50px;
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
  margin: 50px 0 50px;
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

// Switch List

interface SwitchButtonsContainerProps {
  show: boolean;
}

export const StyledSwitchButtonsContainer = styled.div<SwitchButtonsContainerProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  gap: 10px;
  padding: 30px 0;
`;

interface SwitchButtonProps {
  selected?: boolean;
}

export const StyledSwitchButton = styled.button<SwitchButtonProps>`
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
