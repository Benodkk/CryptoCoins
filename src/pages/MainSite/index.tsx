import MarketUpdate from "./MarketUpdate";
import TrandingCoins from "./TrandingCoins";
import WelcomePage from "./WelcomePage";

import { StyledMainContainer } from "./MainSite.styled";

const MainSite = () => {
  return (
    <StyledMainContainer>
      <WelcomePage />
      <TrandingCoins />
      <MarketUpdate />
    </StyledMainContainer>
  );
};

export default MainSite;
