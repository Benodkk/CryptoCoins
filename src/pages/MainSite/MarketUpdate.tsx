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
  const [addTransaction, setAddTransaction] = useState<string | null>(null);
  const nav = useNavigate();

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
