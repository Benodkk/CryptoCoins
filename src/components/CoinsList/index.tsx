import { useState } from "react";
import {
  StyledChangeDiv,
  StyledImgWithName,
  StyledListHeader,
  StyledMarketList,
  StyledOneCoin,
  StyledSymbol,
  StyledToRightDiv,
  StyledTransactionButton,
} from "./CoinsList.styled";

import TransactionModal from "../TransactionModal";

interface CoinDetails {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  market_cap_rank: number;
}

interface Props {
  coins: CoinDetails[];
}

const CoinsList = ({ coins }: Props) => {
  const [addTransaction, setAddTransaction] = useState<string | null>(null);

  return (
    <>
      <StyledMarketList>
        <StyledListHeader>
          <div>#</div>
          <StyledImgWithName>Coin</StyledImgWithName>
          <StyledToRightDiv>Price</StyledToRightDiv>
          <div>24h change</div>
          <StyledToRightDiv>Market Cap</StyledToRightDiv>
        </StyledListHeader>
        {coins ? (
          coins.map((coin) => {
            return (
              <StyledOneCoin key={coin.id}>
                <div>{coin.market_cap_rank}</div>
                <StyledImgWithName>
                  <img src={coin.image} />
                  <div>{coin.name}</div>
                  <StyledSymbol>{coin.symbol.toUpperCase()}</StyledSymbol>
                </StyledImgWithName>
                <StyledToRightDiv>
                  ${coin.current_price.toLocaleString("en-US")}
                </StyledToRightDiv>
                <StyledChangeDiv
                  positive={coin.price_change_percentage_24h > 0}
                >
                  {(coin.price_change_percentage_24h > 0 ? "+" : "") +
                    coin.price_change_percentage_24h.toFixed(2)}
                  %
                </StyledChangeDiv>
                <StyledToRightDiv>
                  ${coin.market_cap.toLocaleString("en-US")}
                </StyledToRightDiv>
                <StyledTransactionButton
                  onClick={() => setAddTransaction(coin.id)}
                >
                  Add transaction
                </StyledTransactionButton>
              </StyledOneCoin>
            );
          })
        ) : (
          <></>
        )}
      </StyledMarketList>
      {addTransaction && (
        <TransactionModal
          coinId={addTransaction}
          setAddTransaction={setAddTransaction}
        />
      )}
    </>
  );
};

export default CoinsList;
