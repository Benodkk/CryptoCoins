import eth from "../../assets/ethereum.png";
import btc from "../../assets/bitcoin.png";

import {
  StyledCoinImg,
  StyledWelcomePageSection,
  StyledWelcomeSign,
  StyledWelcomeSignContainer,
} from "./MainSite.styled";

const WelcomePage = () => {
  return (
    <StyledWelcomePageSection>
      <StyledWelcomeSignContainer>
        <StyledCoinImg src={btc} />
        <StyledWelcomeSign>
          <div>TRACK YOUR FAVOURITE</div>
          <div>CRYPTO CURRENCIES</div>
        </StyledWelcomeSign>
        <StyledCoinImg src={eth} />
      </StyledWelcomeSignContainer>
    </StyledWelcomePageSection>
  );
};

export default WelcomePage;
