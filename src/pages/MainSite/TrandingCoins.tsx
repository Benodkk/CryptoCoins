import { useState, useEffect } from "react";
import {
  StyledOneTrandingCoin,
  StyledTrandingCoins,
  StyledTrandingCoinsSection,
} from "./mainSite.styled";

interface CoinDetails {
  item: {
    id: string;
    small: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
  };
}

const TrandingCoins = () => {
  const [coins, setCoins] = useState<CoinDetails[]>();

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoins(fetchedData.coins.slice(0, 6));
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <StyledTrandingCoinsSection>
      <h2>Trending Coins</h2>
      <StyledTrandingCoins>
        {coins ? (
          coins.map((coin) => {
            return (
              <StyledOneTrandingCoin>
                <img src={coin.item.small} />
                <div>{coin.item.symbol}</div>
                <div>#Rank: {coin.item.market_cap_rank}</div>
              </StyledOneTrandingCoin>
            );
          })
        ) : (
          <></>
        )}
      </StyledTrandingCoins>
    </StyledTrandingCoinsSection>
  );
};

export default TrandingCoins;
