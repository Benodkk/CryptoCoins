import { StyledMainContainer } from "./mainSite.styled";
import MarketUpdate from "./MarketUpdate";
import TrandingCoins from "./TrandingCoins";

const MainSite = () => {
  return (
    <StyledMainContainer>
      <TrandingCoins />
      <MarketUpdate />
    </StyledMainContainer>
  );
};

export default MainSite;
