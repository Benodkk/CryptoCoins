import { useState, useEffect } from "react";
import CoinInfoModal from "../../components/CoinInfoModal";
import TransactionModal from "../../components/TransactionModal";

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

const MarketUpdate = () => {
  const [coins, setCoins] = useState<CoinDetails[]>();
  const [showDetails, setShowDetails] = useState<string | null>(null);
  const [addTransaction, setAddTransaction] = useState<string | null>(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false&locale=en";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoins(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div style={containerStyle}>
      <div>List</div>
      {coins ? (
        coins.map((coin) => {
          return (
            <div style={elementStyle}>
              <div>{coins.indexOf(coin) + 1}</div>
              <img style={{ width: "50px" }} src={coin.image} />
              <div onClick={() => setShowDetails(coin.id)}>{coin.name}</div>
              <div>{coin.symbol}</div>
              <div>{coin.current_price}</div>
              <div>{coin.price_change_percentage_24h}</div>
              <div>{coin.market_cap}</div>
              <button onClick={() => setAddTransaction(coin.id)}>
                Add transaction
              </button>
            </div>
          );
        })
      ) : (
        <></>
      )}
      {showDetails && (
        <CoinInfoModal coinId={showDetails} setShowDetails={setShowDetails} />
      )}
      {addTransaction && (
        <TransactionModal
          coinId={addTransaction}
          setAddTransaction={setAddTransaction}
        />
      )}
      <button>Check whole list</button>
    </div>
  );
};

export default MarketUpdate;
