import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CoinsList from "../../components/CoinsList";
import {
  StyledButton,
  StyledMarketUpdateSection,
  StyledSectionName,
} from "./MainSite.styled";

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

const MarketUpdate = () => {
  const [coins, setCoins] = useState<CoinDetails[]>();
  const nav = useNavigate();

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false&locale=en`;

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
    <StyledMarketUpdateSection>
      <StyledSectionName>Martket update</StyledSectionName>
      {coins ? <CoinsList coins={coins} /> : <></>}
      <StyledButton onClick={() => nav("/market/1")}>
        Check whole list!
      </StyledButton>
    </StyledMarketUpdateSection>
  );
};

export default MarketUpdate;
