import { useState } from "react";

import useRoundNr from "../../hooks/useRoundNr";

import { CoinsSummary } from "./interfaces";

import SwitchListPage from "./SwitchListPage";

import {
  StyledCoinsBottomHeader,
  StyledCoinsRow,
  StyledCoinsTopHeader,
} from "./Profile.styled";

interface Props {
  coinsSummary: CoinsSummary[];
}

const CoinsOverviewRender = ({ coinsSummary }: Props) => {
  const [page, setPage] = useState(1);
  return (
    <>
      <table>
        <thead>
          <StyledCoinsTopHeader>
            <th>Coin</th>
            <th>Current value</th>
            <th>Transactions</th>
            <th>Average price</th>
            <th>All transacions value</th>
            <th>Profit</th>
            <th>Coins remaining</th>
          </StyledCoinsTopHeader>
          <StyledCoinsBottomHeader>
            <th></th>
            <th></th>
            <th>buy</th>
            <th>sell</th>
            <th>buy</th>
            <th>sell</th>
            <th>buy</th>
            <th>sell</th>
            <th></th>
            <th>Amount</th>
            <th>Total value</th>
          </StyledCoinsBottomHeader>
        </thead>
        <tbody>
          {coinsSummary.slice((page - 1) * 20, page * 20).map((coin) => {
            return (
              <StyledCoinsRow key={coin.name}>
                <td>{coin.name}</td>
                <td>{useRoundNr(coin.currentPrice)}</td>
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
                <td>
                  {coin.profit
                    ? Number(coin.profit.toFixed(2)).toLocaleString()
                    : "-"}
                </td>
                <td onClick={() => console.log((1).toPrecision(5))}>
                  {coin.amount ? useRoundNr(coin.amount) : "-"}
                </td>
                <td>{coin.currentPortfolioValue.toFixed(2)}</td>
              </StyledCoinsRow>
            );
          })}
        </tbody>
      </table>
      <SwitchListPage
        pages={Math.ceil(coinsSummary.length / 20)}
        page_nr={page}
        setPage={setPage}
      />
    </>
  );
};

export default CoinsOverviewRender;
