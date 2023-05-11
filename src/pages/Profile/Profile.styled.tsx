import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  min-height: calc(100vh - 54px);
  @media ${devices.tablet} {
    padding-bottom: 20px;
    min-height: calc(100vh - 60px);
  }
`;

// Overview

export const StyledOverviewContainer = styled.section`
  width: 100%;
  background: linear-gradient(
    ${(props) => props.theme.colors.backgroundSecond},
    ${(props) => props.theme.colors.background}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledOverview = styled.section`
  margin-top: 48px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  @media ${devices.tablet} {
    margin-top: 60px;
  }
  @media ${devices.desktop} {
    width: 1024px;
    margin-top: 70px;
  }
`;

export const StyledStatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media ${devices.tablet} {
    gap: 50px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

export const StyledOneStatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  div {
    font-size: 24px;
    @media ${devices.desktop} {
      font-size: 36px;
    }
  }
`;

interface StyledLogOutProps {
  scroll: boolean;
}

export const StyledLogOutContainer = styled.div<StyledLogOutProps>`
  position: absolute;
  top: 0;
  right: 10px;
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
  @media ${devices.desktop} {
    right: 0;
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

interface StyledOneStatValueProps {
  positive: boolean;
}
export const StyledOneStatValue = styled.div<StyledOneStatValueProps>`
  color: ${({ positive }) => (positive ? "green" : "red")};
`;

// tabs

export const StyledTabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

interface StyledTabButtonProps {
  active: boolean;
}

export const StyledTabButton = styled.button<StyledTabButtonProps>`
  font-size: 14px;
  background-color: transparent;
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px 10px 10px;
  border-bottom: ${({ active }) =>
    active ? "2px solid blue" : "2px solid white"};
  transition: 0.2s;
  cursor: pointer;
  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.desktop} {
    &:hover {
      transform: translateY(2px);
      text-shadow: 0.4px 0.4px 1px white;
    }
  }
`;

// Switch List

interface SwitchButtonsContainerProps {
  show: boolean;
}

export const StyledSwitchButtonsContainer = styled.div<SwitchButtonsContainerProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  gap: 5px;
  padding: 15px 0;
  @media ${devices.desktop} {
    gap: 10px;
    padding: 30px 0;
  }
`;

interface SwitchButtonProps {
  selected?: boolean;
}

export const StyledSwitchButton = styled.button<SwitchButtonProps>`
  font-size: 18px;
  font-weight: 500;
  padding: 6px;
  border: none;
  color: ${({ selected }) => (!selected ? "white" : "rgb(0,6,68)")};
  background-color: ${({ selected }) => (!selected ? "rgb(0,6,68)" : "white")};
  cursor: pointer;
  &:hover {
    color: rgb(0, 6, 68);
    background-color: white;
  }
  @media ${devices.tablet} {
    font-size: 24px;
    padding: 8px;
  }
`;

// No transactions

export const StyledNoTransactions = styled.div`
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
  &:hover {
    transform: translateY(2px);
    text-shadow: 0.4px 0.4px 1px white;
  }
  @media ${devices.tablet} {
    font-size: 36px;
  }
`;
