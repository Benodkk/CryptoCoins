import {
  StyledCoinImg,
  StyledWelcomePageSection,
  StyledWelcomeSign,
} from "./MainSite.styled";
import eth from "../../assets/ethereum.png";
import btc from "../../assets/bitcoin.png";

const WelcomePage = () => {
  return (
    <StyledWelcomePageSection>
      <StyledCoinImg src={btc} />
      <StyledWelcomeSign>
        <div>TRACK YOUR FAVOURITE</div>
        <div>CRYPTO CURRENCIES</div>
      </StyledWelcomeSign>
      <StyledCoinImg src={eth} />
    </StyledWelcomePageSection>
  );
};

export default WelcomePage;
