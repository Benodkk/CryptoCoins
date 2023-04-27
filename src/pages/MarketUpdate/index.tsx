import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinsList from "../../components/CoinsList";
import { StyledMainContainer, StyledSectionName } from "./MarketUpdate.styled";
import SwitchPage from "./SwitchPage";
import Header from "../../components/Header";

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
  const [data, setData] = useState<CoinDetails[]>();
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=${page_nr}&sparkline=false&locale=en`;

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
  }, [page_nr]);

  return (
    <StyledMainContainer>
      <Header />
      <StyledSectionName>Martket update</StyledSectionName>
      {data ? <CoinsList coins={data} /> : <></>}
      <SwitchPage
        pages={10}
        switchPageUrl={"/market"}
        page_nr={Number(page_nr)}
      />
    </StyledMainContainer>
  );
};

export default MarketUpdate;
