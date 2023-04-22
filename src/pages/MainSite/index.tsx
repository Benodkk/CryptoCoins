import Header from "../../components/Header";
import { StyledMainContainer } from "./MainSite.styled";
import MarketUpdate from "./MarketUpdate";
import TrandingCoins from "./TrandingCoins";
import WelcomePage from "./WelcomePage";

const MainSite = () => {
  return (
    <StyledMainContainer>
      <Header />
      <WelcomePage />
      {/* <TrandingCoins />
      <MarketUpdate /> */}
    </StyledMainContainer>
  );
};

export default MainSite;
