import { useState, useEffect } from "react";

interface Props {
  coinId: string;
  setShowDetails: React.Dispatch<React.SetStateAction<string | null>>;
}
interface Coin {
  name: string;
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
