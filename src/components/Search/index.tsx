import {
  StyledBomba,
  StyledInputContainer,
  StyledInputSearch,
  StyledOneResult,
  StyledOneResultDetails,
  StyledSearchResult,
} from "./Search.styled";
import { useState, useEffect } from "react";
import { StyledNavigate } from "../Header/Header.styled";
import { StyledSymbol } from "../CoinsList/CoinsList.styled";
import CloseButton from "../CloseButton";

interface CoinDetails {
  id: string;
  thumb: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
}

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search = ({ setSearch }: Props) => {
  const [data, setData] = useState<CoinDetails[]>();
  const [query, setQuery] = useState("");
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const url = `https://api.coingecko.com/api/v3/search?query=${query}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData.coins.slice(0, 6));
        console.log(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [query]);

  const runTimer = () => {
    const timeout = setTimeout(() => {
      setSearch(false);
    }, 3000);
    setTimer(timeout);
  };

  return (
    <>
      <StyledBomba
        active={data ? true : false}
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
          {data?.map((coin) => {
            return (
              <StyledOneResult>
                <StyledOneResultDetails>
                  <img src={coin.thumb} />
                  <div>{coin.name}</div>
                  <StyledSymbol>{coin.symbol}</StyledSymbol>
                </StyledOneResultDetails>
                <div>#{coin.market_cap_rank}</div>
              </StyledOneResult>
            );
          })}
        </StyledSearchResult>
      </StyledBomba>
      <div>Search</div>
    </>
  );
};
export default Search;
