import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BeatLoader } from "react-spinners";

import CoinsList from "../../components/CoinsList";
import FetchError from "../../components/FetchError";

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
  const nav = useNavigate();
  const [coins, setCoins] = useState<CoinDetails[]>();
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false&locale=en`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoins(fetchedData);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <StyledMarketUpdateSection>
      <StyledSectionName>Martket update</StyledSectionName>
      {loading ? (
        <BeatLoader color={"#ffffff"} />
      ) : coins ? (
        <CoinsList coins={coins} />
      ) : (
        <FetchError />
      )}
      <StyledButton onClick={() => nav("/market/1")}>
        Check whole list!
      </StyledButton>
    </StyledMarketUpdateSection>
  );
};

export default MarketUpdate;
