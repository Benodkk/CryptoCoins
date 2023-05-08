import { CoinDetails } from "./interfaces";

import {
  StyledChangeDiv,
  StyledImgWithName,
  StyledOneCoin,
  StyledSymbol,
  StyledToRightDiv,
  StyledTransactionButton,
} from "./CoinsList.styled";

interface Props {
  coin: CoinDetails;
  setShowDetails: React.Dispatch<React.SetStateAction<string | null>>;
  setAddTransaction: React.Dispatch<React.SetStateAction<string | null>>;
}

const OneCoin = ({ coin, setShowDetails, setAddTransaction }: Props) => {
  return (
    <StyledOneCoin onClick={() => setShowDetails(coin.id)}>
      <div>{coin.market_cap_rank}</div>
      <StyledImgWithName>
        <img src={coin.image} />
        <div>{coin.name}</div>
        <StyledSymbol>{coin.symbol.toUpperCase()}</StyledSymbol>
      </StyledImgWithName>
      <StyledToRightDiv>
        ${coin.current_price.toLocaleString("en-US")}
      </StyledToRightDiv>
      <StyledChangeDiv positive={coin.price_change_percentage_24h > 0}>
        {(coin.price_change_percentage_24h > 0 ? "+" : "") +
          coin.price_change_percentage_24h.toFixed(2)}
        %
      </StyledChangeDiv>
      <StyledToRightDiv>
        ${coin.market_cap.toLocaleString("en-US")}
      </StyledToRightDiv>
      <StyledTransactionButton
        onClick={(e) => {
          e.stopPropagation();
          setAddTransaction(coin.id);
        }}
      >
        Add transaction
      </StyledTransactionButton>
    </StyledOneCoin>
  );
};

export default OneCoin;
