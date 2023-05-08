import { CoinDetails } from "./interfaces";

import {
  StyledOneResult,
  StyledOneResultDetails,
  StyledSymbol,
} from "./Search.styled";

interface Props {
  coin: CoinDetails;
  setShowDetails: React.Dispatch<React.SetStateAction<string | null>>;
}

const OneResult = ({ coin, setShowDetails }: Props) => {
  return (
    <StyledOneResult onClick={() => setShowDetails(coin.id)}>
      <StyledOneResultDetails>
        <img src={coin.thumb} />
        <div>{coin.name}</div>
        <StyledSymbol>{coin.symbol}</StyledSymbol>
      </StyledOneResultDetails>
      <div>#{coin.market_cap_rank}</div>
    </StyledOneResult>
  );
};

export default OneResult;
