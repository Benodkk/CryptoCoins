import styled from "styled-components";
import { devices } from "../../../styles/deviceWidth";

export const StyledTransactionHistory = styled.section`
  margin: 20px 0px 0;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media ${devices.desktop} {
    margin: 50px 0 0;
    padding: 0;
    width: 1024px;
  }
`;

export const StyledTransactionsHeader = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(6, 1fr) 1.5fr;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid white;
  width: 100%;
  font-size: 16px;
  @media ${devices.desktop} {
    width: 1024px;
    font-size: 20px;
  }
`;

export const StyledOneTransaction = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(6, 1fr) 1.5fr;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid white;
  td {
    text-align: center;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverDark};
  }
  &:last-child {
    border-bottom: none;
  }
  width: 100%;
  font-size: 16px;
  @media ${devices.desktop} {
    width: 1024px;
    font-size: 20px;
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

// transaction histroy mobile

export const StyledTransactionsHeaderMobile = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px 0;
  width: 100%;
`;

export const StyledOneTransactionMobile = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 10px;
  padding: 10px 0;
  border-top: 1px solid white;
  td {
    text-align: center;
  }
`;

interface StyledOneTransactionDetailsMobileProps {
  show: boolean;
}

export const StyledOneTransactionDetailsMobile = styled.tr<StyledOneTransactionDetailsMobileProps>`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 10px;
  padding: ${({ show }) => (show ? "10px 0" : 0)};
  height: ${({ show }) => (show ? "auto" : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  td {
    text-align: center;
  }
  button {
    transition: 0s;
  }
`;
