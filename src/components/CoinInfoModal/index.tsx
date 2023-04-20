import { useState, useEffect } from "react";

interface Props {
  coinId: string;
  setShowDetails: React.Dispatch<React.SetStateAction<string | null>>;
}
interface Coin {
  name: string;
  symbol: string;
  market_data: {
    current_price: {
      usd: string;
    };
    market_cap: {
      usd: string;
    };
    price_change_percentage_7d_in_currency: {
      usd: string;
    };
    price_change_percentage_24h_in_currency: {
      usd: string;
    };
    price_change_percentage_1h_in_currency: {
      usd: string;
    };
  };
  image: {
    large: string;
  };
  description: {
    en: string;
  };
  market_cap_rank: string;
}
const CoinInfoModal = ({ coinId, setShowDetails }: Props) => {
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
    <div>
      <div onClick={() => setShowDetails(null)}>siema</div>
      <div>{coin ? coin.name : <></>}</div>
    </div>
  );
};

export default CoinInfoModal;
