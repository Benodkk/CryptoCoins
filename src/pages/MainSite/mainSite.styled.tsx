import styled from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Trading Coins

export const StyledTrandingCoinsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
`;

export const StyledTrandingCoins = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
`;

export const StyledOneTrandingCoin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin: 20px;
  border: 3px solid white;
  border-radius: 10px;
  font-weight: 700;
`;

// Market Update

export const StyledMarketUpdateSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMarketList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
`;

export const StyledListHeader = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 1024px;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1.5fr 1fr;
  gap: 20px;
  padding: 20px 0;
  font-weight: 700;
`;

export const StyledOneCoin = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 1024px;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1.5fr 1fr;
  gap: 20px;
  padding: 10px 0;
  font-weight: 700;
  border-top: 1px solid white;
  &:hover {
    background-color: rgb(4, 7, 46);
  }
  img {
    width: 40px;
  }
`;

export const StyledImgWithName = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;
  gap: 10px;
  cursor: pointer;
  img {
    width: 40px;
  }
`;

export const StyledSymbol = styled.div`
  font-weight: 500;
`;

export const StyledToRightDiv = styled.div`
  justify-self: end;
`;
