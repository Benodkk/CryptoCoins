import { useState, useEffect } from "react";

const containerStyle: React.CSSProperties | undefined = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

const elementStyle: React.CSSProperties | undefined = {
  display: "flex",
  gap: "40px",
};

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
        setCoins(fetchedData.coins);
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <div style={containerStyle}>
      <div>Trending Coins</div>
      {coins ? (
        coins.map((coin) => {
          return (
            <div style={elementStyle}>
              <img src={coin.item.small} />
              <div>{coin.item.symbol}</div>
              <div>{coin.item.name}</div>
              <div>{coin.item.market_cap_rank}</div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default TrandingCoins;
