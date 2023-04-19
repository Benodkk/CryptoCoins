import { useEffect, useState } from "react";

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
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

const List = () => {
  const [data, setData] = useState<CoinDetails[]>();
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div style={containerStyle}>
      <div>List</div>
      {data ? (
        data.map((coin) => {
          return (
            <div style={elementStyle}>
              <div>{data.indexOf(coin) + 1}</div>
              <img style={{ width: "50px" }} src={coin.image} />
              <div>{coin.name}</div>
              <div>{coin.symbol}</div>
              <div>{coin.current_price}</div>
              <div>{coin.price_change_percentage_24h}</div>
              <div>{coin.market_cap}</div>
              <button>Add transaction</button>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default List;
