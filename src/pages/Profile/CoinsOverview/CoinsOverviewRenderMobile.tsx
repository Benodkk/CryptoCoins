import { useState } from "react";

import arrow from "../../../assets/arrow.png";

import useRoundNr from "../../../hooks/useRoundNr";

import { CoinsSummary } from "../interfaces";

import {
  StyledCoinRowMobile,
  StyledCoinsHeaderMobile,
  StyledTransactionDetailsMobile,
  StyledTransactionLabelsMobile,
  StyledTransactionMobile,
} from "./CoinsOvertview.styled";

interface Props {
  coinsSummary: CoinsSummary[];
}

const CoinsOverviewRenderMobile = ({ coinsSummary }: Props) => {
  const [showDetails, setShowDetails] = useState("");
  return (
    <>
      <table>
        <thead>
          <StyledCoinsHeaderMobile>
            <th>Coin</th>
            <th>Current price</th>
            <th>Coins remaining</th>
            <th>Total value</th>
          </StyledCoinsHeaderMobile>
        </thead>
        <tbody>
          {coinsSummary.map((coin) => {
            return (
              <>
                <StyledCoinRowMobile>
                  <td>{coin.name}</td>
                  <td>{useRoundNr(coin.currentPrice)}</td>
                  <td onClick={() => console.log((1).toPrecision(5))}>
                    {coin.amount ? useRoundNr(coin.amount) : "-"}
                  </td>
                  <td>{coin.currentPortfolioValue.toFixed(2)}</td>
                </StyledCoinRowMobile>
                <StyledTransactionMobile
                  show={coin.name === showDetails}
                  onClick={() => {
                    showDetails === coin.name
                      ? setShowDetails("")
                      : setShowDetails(coin.name);
                  }}
                >
                  <td>Transactions</td>
                  <td>
                    <img src={arrow} />
                  </td>
                </StyledTransactionMobile>
                <StyledTransactionLabelsMobile show={coin.name === showDetails}>
                  <td>Transactions</td>
                  <td>Average Price</td>
                  <td>All Transaction value</td>
                </StyledTransactionLabelsMobile>
                <StyledTransactionDetailsMobile
                  show={coin.name === showDetails}
                >
                  <td>BUY</td>
                  <td>SELL</td>
                  <td>BUY</td>
                  <td>SELL</td>
                  <td>BUY</td>
                  <td>SELL</td>
                </StyledTransactionDetailsMobile>
                <StyledTransactionDetailsMobile
                  show={coin.name === showDetails}
                >
                  <td>{coin.transactionsBuy}</td>
                  <td>{coin.transactionsSell}</td>
                  <td>
                    {coin.averageBuyPrice
                      ? useRoundNr(coin.averageBuyPrice)
                      : "-"}
                  </td>
                  <td>
                    {coin.averageSellPrice
                      ? useRoundNr(coin.averageSellPrice)
                      : "-"}
                  </td>
                  <td>
                    {coin.totalMoneyInvested
                      ? useRoundNr(coin.totalMoneyInvested)
                      : "-"}
                  </td>
                  <td>
                    {coin.totalMoneyWithdraw
                      ? useRoundNr(coin.totalMoneyWithdraw)
                      : "-"}
                  </td>
                </StyledTransactionDetailsMobile>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CoinsOverviewRenderMobile;
