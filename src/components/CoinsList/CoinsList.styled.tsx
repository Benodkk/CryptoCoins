import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledMarketList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media ${devices.desktop} {
    width: 1024px;
  }
`;

export const StyledListHeader = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 3fr;
  gap: 10px;
  padding: 5px 10px;
  font-weight: 700;
  width: 100%;
  @media ${devices.tablet} {
    padding: 10px;
    grid-template-columns: 0.3fr 2fr 1fr 1fr 1.5fr;
  }
  @media ${devices.desktop} {
    grid-template-columns: 0.5fr 3fr 1fr 1fr 1.5fr 1fr;
    width: 1024px;
    gap: 20px;
    padding: 10px 0;
  }
`;

// One coin

export const StyledOneCoin = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 3fr;
  gap: 10px;
  padding: 5px 10px;
  font-weight: 700;
  border-top: 1px solid white;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverDark};
  }
  width: 100%;
  @media ${devices.tablet} {
    padding: 10px;
    grid-template-columns: 0.3fr 2fr 1fr 1fr 1.5fr;
  }
  @media ${devices.desktop} {
    grid-template-columns: 0.5fr 3fr 1fr 1fr 1.5fr 1fr;
    width: 1024px;
    gap: 20px;
    padding: 10px 0;
  }
`;

export const StyledImgWithName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: start;
  gap: 5px;
  width: 100%;
  img {
    width: 25px;
  }
  @media ${devices.tablet} {
    flex-direction: row;
    gap: 10px;
    img {
      width: 40px;
    }
  }
`;

export const StyledSymbol = styled.div`
  @media ${devices.tablet} {
    font-weight: 500;
  }
`;

interface StyledChangeDivProps {
  positive: boolean;
}

export const StyledChangeDiv = styled.div<StyledChangeDivProps>`
  color: ${({ positive }) => (positive ? "green" : "red")};
`;

export const StyledToRightDiv = styled.div`
  justify-self: end;
`;

export const StyledTransactionButton = styled.button`
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
