import { useState } from "react";

import TransactionModal from "../TransactionModal";
import DetailsModal from "../DetailsModal";
import OneCoin from "./OneCoin";

import { CoinDetails } from "./interfaces";

import {
  StyledImgWithName,
  StyledListHeader,
  StyledMarketList,
  StyledToRightDiv,
} from "./CoinsList.styled";
import { useMediaQuery } from "react-responsive";
import { reactDevice } from "../../styles/deviceWidth";

interface Props {
  coins: CoinDetails[];
}

const CoinsList = ({ coins }: Props) => {
  const [addTransaction, setAddTransaction] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState<string | null>(null);

  return (
    <>
      <StyledMarketList>
        <StyledListHeader>
          <div>#</div>
          <StyledImgWithName>Coin</StyledImgWithName>
          <StyledToRightDiv>Price</StyledToRightDiv>
          <div>
            24h
            {useMediaQuery(reactDevice.desktop) && <> change</>}
          </div>
          <StyledToRightDiv>Market Cap</StyledToRightDiv>
        </StyledListHeader>
        {coins.map((coin) => {
          return (
            <OneCoin
              key={coin.id}
              coin={coin}
              setAddTransaction={setAddTransaction}
              setShowDetails={setShowDetails}
            />
          );
        })}
      </StyledMarketList>
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

export default CoinsList;
