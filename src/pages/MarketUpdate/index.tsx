import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BeatLoader } from "react-spinners";

import SwitchPage from "./SwitchPage";
import FetchError from "../../components/FetchError";
import CoinsList from "../../components/CoinsList";

import { StyledMainContainer, StyledSectionName } from "./MarketUpdate.styled";

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
  const { page_nr } = useParams();
  const [coins, setCoins] = useState<CoinDetails[]>();
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=${page_nr}&sparkline=false&locale=en`;

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
  }, [page_nr]);

  return (
    <StyledMainContainer>
      <StyledSectionName>Martket update</StyledSectionName>
      {loading ? (
        <BeatLoader color={"#ffffff"} />
      ) : coins ? (
        <CoinsList coins={coins} />
      ) : (
        <FetchError />
      )}
      {coins && (
        <SwitchPage
          pages={10}
          switchPageUrl={"/market"}
          page_nr={Number(page_nr)}
        />
      )}
    </StyledMainContainer>
  );
};

export default MarketUpdate;
