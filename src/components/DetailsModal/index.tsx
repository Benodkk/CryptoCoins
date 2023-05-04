import {
  StyledButtonRow,
  StyledCoinSymbol,
  StyledHeadInfo,
  StyledLabel,
  StyledModal,
  StyledModalContainer,
  StyledModalHeadRow,
  StyledPrice,
  StyledPriceContainer,
  StyledRow,
  StyledTransactionButton,
} from "./DetailsModal.styled";

import { useState, useEffect } from "react";
import useRoundNr from "../../hooks/useRoundNr";
import CloseButton from "../CloseButton";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  market_data: {
    ath: {
      usd: number;
    };
    ath_change_percentage: {
      usd: number;
    };
    ath_date: {
      usd: string;
    };
    price_change_percentage_1h_in_currency: {
      usd: number;
    };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
  };
  market_cap_rank: number;

  image: {
    large: string;
  };
}

interface Props {
  coinId: string;
  setShowDetails: React.Dispatch<React.SetStateAction<string | null>>;
  setAddTransaction: React.Dispatch<React.SetStateAction<string | null>>;
}

const DetailsModal = ({ coinId, setShowDetails, setAddTransaction }: Props) => {
  const [coin, setCoin] = useState<Coin>();

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoin(fetchedData);
        console.log(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <StyledModalContainer>
      {coin ? (
        <StyledModal>
          <StyledModalHeadRow>
            <StyledHeadInfo>
              <div>Rank# {coin.market_cap_rank}</div>
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
                  coin.market_data.price_change_percentage_1h_in_currency.usd >
                  0
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
              {coin.market_data.ath.usd.toLocaleString()}$
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
      ) : (
        <></>
      )}
    </StyledModalContainer>
  );
};
export default DetailsModal;
