import { useState, useEffect } from "react";

import { BeatLoader } from "react-spinners";

import CloseButton from "../CloseButton";
import DetailsModal from "../DetailsModal";
import TransactionModal from "../TransactionModal";
import OneResult from "./OneResult";

import { CoinDetails } from "./interfaces";

import {
  StyledSearchContainer,
  StyledInputContainer,
  StyledInputSearch,
  StyledSearchResult,
} from "./Search.styled";
import { StyledNavigate } from "../Header/Header.styled";

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  search: boolean;
}

const Search = ({ setSearch, search }: Props) => {
  const [data, setData] = useState<CoinDetails[]>();
  const [query, setQuery] = useState("");
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [addTransaction, setAddTransaction] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/search?query=${query}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData.coins.slice(0, 6));
        console.log(fetchedData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const runTimer = () => {
    const timeout = setTimeout(() => {
      if (!showDetails && !addTransaction) {
        setSearch(false);
      }
    }, 3000);
    setTimer(timeout);
  };

  return (
    <>
      <StyledSearchContainer
        active={search}
        onMouseLeave={() => runTimer()}
        onMouseEnter={() => clearTimeout(timer)}
      >
        <StyledInputContainer>
          <StyledInputSearch
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search crypto name"
            type="search"
          />
          <CloseButton onClick={() => setSearch(false)} />
        </StyledInputContainer>
        <StyledSearchResult>
          {loading ? (
            <BeatLoader color={"#ffffff"} />
          ) : (
            data?.map((coin) => {
              return (
                <OneResult
                  key={coin.id}
                  coin={coin}
                  setShowDetails={setShowDetails}
                />
              );
            })
          )}
        </StyledSearchResult>
      </StyledSearchContainer>
      <StyledNavigate onClick={() => setSearch(true)}>Search</StyledNavigate>
      {addTransaction && (
        <TransactionModal
          coinId={addTransaction}
          setAddTransaction={setAddTransaction}
        />
      )}
      {showDetails && (
        <DetailsModal
          setShowDetails={setShowDetails}
          coinId={showDetails}
          setAddTransaction={setAddTransaction}
        />
      )}
    </>
  );
};
export default Search;
