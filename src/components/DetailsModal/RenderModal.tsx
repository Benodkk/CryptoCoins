import useRoundNr from "../../hooks/useRoundNr";

import CloseButton from "../CloseButton";

import { Coin } from "./interfaces";

import {
  StyledButtonRow,
  StyledCoinSymbol,
  StyledHeadInfo,
  StyledLabel,
  StyledModal,
  StyledModalHeadRow,
  StyledPrice,
  StyledPriceContainer,
  StyledRow,
  StyledTransactionButton,
} from "./DetailsModal.styled";

interface Props {
  coin: Coin;
  setShowDetails: React.Dispatch<React.SetStateAction<string | null>>;
  setAddTransaction: React.Dispatch<React.SetStateAction<string | null>>;
}
const RenderModal = ({ coin, setShowDetails, setAddTransaction }: Props) => {
  return (
    <StyledModal>
      <StyledModalHeadRow>
        <StyledHeadInfo>
          <div>#Rank: {coin.market_cap_rank}</div>
          <img src={coin.image.large} />
          <div>{coin.name}</div>
          <StyledCoinSymbol>{coin.symbol.toUpperCase()}</StyledCoinSymbol>
        </StyledHeadInfo>
        <CloseButton onClick={() => setShowDetails(null)} />
      </StyledModalHeadRow>
      <StyledRow>
        <div>
          <StyledLabel>Price: </StyledLabel>
          {useRoundNr(coin.market_data.current_price.usd)}$
        </div>
        <div>
          <StyledLabel>Market Cap: </StyledLabel>
          {coin.market_data.market_cap.usd.toLocaleString()}$
        </div>
      </StyledRow>
      <StyledRow>
        <StyledLabel>Price change:</StyledLabel>
        <StyledPriceContainer>
          <StyledLabel>1h: </StyledLabel>
          <StyledPrice
            positive={
              coin.market_data.price_change_percentage_1h_in_currency.usd > 0
            }
          >
            {coin.market_data.price_change_percentage_1h_in_currency.usd > 0
              ? "+"
              : ""}
            {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
              2
            )}
            %
          </StyledPrice>
        </StyledPriceContainer>
        <StyledPriceContainer>
          <StyledLabel>24h: </StyledLabel>
          <StyledPrice
            positive={coin.market_data.price_change_percentage_24h > 0}
          >
            {coin.market_data.price_change_percentage_24h > 0 ? "+" : ""}
            {coin.market_data.price_change_percentage_24h.toFixed(2)}%
          </StyledPrice>
        </StyledPriceContainer>
        <StyledPriceContainer>
          <StyledLabel>7d: </StyledLabel>
          <StyledPrice
            positive={coin.market_data.price_change_percentage_7d > 0}
          >
            {coin.market_data.price_change_percentage_7d > 0 ? "+" : ""}
            {coin.market_data.price_change_percentage_7d.toFixed(2)}%
          </StyledPrice>
        </StyledPriceContainer>
      </StyledRow>
      <StyledRow>
        <StyledLabel>ATH:</StyledLabel>
        <div>
          <StyledLabel>Price: </StyledLabel>
          {useRoundNr(coin.market_data.ath.usd)}$
        </div>
        <div>
          <StyledLabel>Date: </StyledLabel>
          {coin.market_data.ath_date.usd.slice(0, 10)}
        </div>
        <StyledPriceContainer>
          <StyledLabel>Change: </StyledLabel>
          <StyledPrice
            positive={coin.market_data.ath_change_percentage.usd > 0}
          >
            {coin.market_data.ath_change_percentage.usd > 0 ? "+" : ""}
            {coin.market_data.ath_change_percentage.usd.toFixed(2)}%
          </StyledPrice>
        </StyledPriceContainer>
      </StyledRow>
      <StyledButtonRow>
        <StyledTransactionButton
          onClick={() => {
            setShowDetails(null);
            setAddTransaction(coin.id);
          }}
        >
          Add Transaction
        </StyledTransactionButton>
      </StyledButtonRow>
    </StyledModal>
  );
};

export default RenderModal;
