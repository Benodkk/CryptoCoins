import { useState, useEffect } from "react";
import DetailsModal from "../../components/DetailsModal";
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
  const [coins, setCoins] = useState<CoinDetails[]>();
  const [showDetails, setShowDetails] = useState<null | string>(null);
  const [addTransaction, setAddTransaction] = useState<null | string>(null);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoins(fetchedData.coins.slice(0, 6));
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <StyledTrandingCoinsSection>
      <StyledSectionName>Trending Coins</StyledSectionName>
      <StyledTrandingCoins>
        {coins ? (
          coins.map((coin) => {
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
          })
        ) : (
          <></>
        )}
      </StyledTrandingCoins>
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
