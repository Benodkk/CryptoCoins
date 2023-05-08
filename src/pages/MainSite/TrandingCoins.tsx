import { useState, useEffect } from "react";

import { BeatLoader } from "react-spinners";

import DetailsModal from "../../components/DetailsModal";
import FetchError from "../../components/FetchError";
import TransactionModal from "../../components/TransactionModal";

import {
  StyledOneTrandingCoin,
  StyledSectionName,
  StyledTrandingCoins,
  StyledTrandingCoinsSection,
} from "./MainSite.styled";

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
  const [coins, setCoins] = useState<CoinDetails[] | null>(null);
  const [showDetails, setShowDetails] = useState<null | string>(null);
  const [addTransaction, setAddTransaction] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoins(fetchedData.coins.slice(0, 6));
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <StyledTrandingCoinsSection>
      <StyledSectionName>Trending Coins</StyledSectionName>
      {loading ? (
        <BeatLoader color={"#ffffff"} />
      ) : coins ? (
        <StyledTrandingCoins>
          {coins.map((coin) => {
            return (
              <StyledOneTrandingCoin
                key={coin.item.id}
                onClick={() => setShowDetails(coin.item.id)}
              >
                <img src={coin.item.small} />
                <div>{coin.item.symbol}</div>
                <div>#Rank: {coin.item.market_cap_rank}</div>
              </StyledOneTrandingCoin>
            );
          })}
        </StyledTrandingCoins>
      ) : (
        <FetchError />
      )}
      {showDetails && (
        <DetailsModal
          setAddTransaction={setAddTransaction}
          setShowDetails={setShowDetails}
          coinId={showDetails}
        />
      )}
      {addTransaction && (
        <TransactionModal
          setAddTransaction={setAddTransaction}
          coinId={addTransaction}
        />
      )}
    </StyledTrandingCoinsSection>
  );
};

export default TrandingCoins;
