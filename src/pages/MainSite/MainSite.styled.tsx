import styled, { keyframes } from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;

export const StyledSectionName = styled.h2`
  font-size: 40px;
  padding: 30px 0;
`;

// Welcome Page

export const StyledWelcomePageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0 0;
  height: 50vh;
  text-shadow: 1px 1px 2px rgba(48, 45, 45, 0.5);
  font-weight: 700;
  background: linear-gradient(
    ${(props) => props.theme.colors.backgroundSecond},
    ${(props) => props.theme.colors.background}
  );
`;

export const StyledWelcomeSignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 1024px;
`;

export const StyledWelcomeSign = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 60px;
`;

const bounce = keyframes`
0%{
  transform: translateY(0) ;
}
40%{
  transform: translateY(-20px);
}
100%{
  transform: translateY(0);
}`;

export const StyledCoinImg = styled.img`
  width: 100px;
  animation: ${bounce} 2s ease-in-out infinite;
`;

// Trading Coins

export const StyledTrandingCoinsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  min-height: 50vh;
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
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverDark};
  }
`;

// Market Update

export const StyledMarketUpdateSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 5px 10px;
  margin-top: 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  font-size: 20px;
  &:hover {
    background-color: ${(props) => props.theme.colors.interaction};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.interaction};
    transform: scale(0.9);
  }
`;
