import { useNavigate } from "react-router";

import { auth } from "../../config/firebase";

import { CoinDetails } from "./interfaces";

import { useMediaQuery } from "react-responsive";
import {
  StyledChangeDiv,
  StyledImgWithName,
  StyledOneCoin,
  StyledSymbol,
  StyledToRightDiv,
  StyledTransactionButton,
} from "./CoinsList.styled";
import { reactDevice } from "../../styles/deviceWidth";

interface Props {
  coin: CoinDetails;
  setShowDetails: React.Dispatch<React.SetStateAction<string | null>>;
  setAddTransaction: React.Dispatch<React.SetStateAction<string | null>>;
}

const OneCoin = ({ coin, setShowDetails, setAddTransaction }: Props) => {
  const navigate = useNavigate();
  return (
    <StyledOneCoin onClick={() => setShowDetails(coin.id)}>
      <div>{coin.market_cap_rank}</div>
      <StyledImgWithName>
        <img src={coin.image} />
        {useMediaQuery(reactDevice.desktop) && <div>{coin.name}</div>}
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
      {useMediaQuery(reactDevice.desktop) && (
        <StyledTransactionButton
          onClick={(e) => {
            auth.currentUser
              ? (e.stopPropagation(), setAddTransaction(coin.id))
              : navigate("/sign_in");
          }}
        >
          Add Transaction
        </StyledTransactionButton>
      )}
    </StyledOneCoin>
  );
};

export default OneCoin;
