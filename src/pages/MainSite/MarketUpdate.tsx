import { useState, useEffect } from "react";
import TransactionModal from "../../components/TransactionModal";
import {
  StyledChangeDiv,
  StyledImgWithName,
  StyledListHeader,
  StyledMarketList,
  StyledMarketUpdateSection,
  StyledOneCoin,
  StyledSymbol,
  StyledToRightDiv,
  StyledTransactionButton,
} from "./MainSite.styled";

interface CoinDetails {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

const MarketUpdate = () => {
  const [coins, setCoins] = useState<CoinDetails[]>();
  const [addTransaction, setAddTransaction] = useState<string | null>(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false&locale=en";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoins(fetchedData);
        console.log(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <StyledMarketUpdateSection>
      <h2>List</h2>
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
                <div>{coins.indexOf(coin) + 1}</div>
                <StyledImgWithName>
                  <img src={coin.image} />
                  <div>{coin.name}</div>
                  <StyledSymbol>{coin.symbol}</StyledSymbol>
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
      <button onClick={() => setAddTransaction("bitcoin")}>
        Check whole list
      </button>
    </StyledMarketUpdateSection>
  );
};

export default MarketUpdate;
