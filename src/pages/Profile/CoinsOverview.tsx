import { useState } from "react";
import { useEffect } from "react";
import { db, auth } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  StyledCoinsBottomHeader,
  StyledCoinsOverview,
  StyledCoinsRow,
  StyledCoinsTopHeader,
} from "./Profile.styled";
import { StyledSectionName } from "../MainSite/MainSite.styled";

interface CoinsSummary {
  name: string;
  currentPrice: number;
  transactionsBuy: number;
  transactionsSell: number;
  averageBuyPrice: number;
  averageSellPrice: number;
  totalMoneyInvested: number;
  totalMoneyWithdraw: number;
  profit: number;
  amount: number;
  currentPortfolioValue: number;
}

interface Transaction {
  name: string;
  amount: number;
  coinId: string;
  date: string;
  id: string;
  price: number;
  type: string;
}

interface SortedCoins {
  [x: string]: {
    transactions: Transaction[];
    currentPrice: number;
  };
}

interface PortfolioValue {
  profit: number;
  coinsValue: number;
}

interface Props {
  setPortfolioValue: React.Dispatch<
    React.SetStateAction<PortfolioValue | undefined>
  >;
}

const CoinsOverview = ({ setPortfolioValue }: Props) => {
  const user = auth.currentUser?.uid;
  const [coinsSummary, setCoinsSummary] = useState<CoinsSummary[] | null>(null);

  const getCoinsList = async () => {
    let coins: CoinsSummary[] = [];

    const transactionsColletionRef = collection(
      db,
      "users",
      `${user}`,
      "transactions"
    );
    try {
      const data = await getDocs(transactionsColletionRef);
      const filteredData = data.docs.map((doc) => {
        const transaction = doc.data() as Transaction;
        return {
          ...transaction,
        };
      });

      const groupedData = filteredData.reduce((acc: SortedCoins, curr) => {
        const id = curr.coinId;
        if (!acc[id]) {
          acc[id] = {
            transactions: [],
            currentPrice: 0,
          };
        }
        acc[id].transactions.push(curr);
        return acc;
      }, {});

      for (let id in groupedData) {
        const fetcheCoin = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
        );
        const coin = await fetcheCoin.json();
        if (coin) {
          groupedData[id].currentPrice = coin[id].usd;
        }
      }

      for (let id in groupedData) {
        let buy = {
          count: 0,
          sumOfInvested: 0,
          sumOfAmounts: 0,
        };

        let sell = {
          count: 0,
          sumOfInvested: 0,
          sumOfAmounts: 0,
        };

        groupedData[id].transactions.forEach((coin: Transaction) => {
          const invested = coin.amount * coin.price;
          if (coin.type === "buy") {
            buy.count += 1;
            buy.sumOfInvested += invested;
            buy.sumOfAmounts += coin.amount;
          }
          if (coin.type === "sell") {
            sell.count += 1;
            sell.sumOfInvested += invested;
            sell.sumOfAmounts += coin.amount;
          }
        });

        const averageBuyPrice = buy.sumOfInvested / buy.sumOfAmounts;
        const averageSellPrice = sell.sumOfInvested / sell.sumOfAmounts;

        coins.push({
          name: groupedData[id].transactions[0].name,
          currentPrice: groupedData[id].currentPrice,
          transactionsBuy: buy.count,
          transactionsSell: sell.count,
          averageBuyPrice: averageBuyPrice,
          averageSellPrice: averageSellPrice,
          totalMoneyInvested: buy.sumOfInvested,
          totalMoneyWithdraw: sell.sumOfInvested,
          profit: sell.sumOfInvested - buy.sumOfInvested,
          amount: buy.sumOfAmounts - sell.sumOfAmounts,
          currentPortfolioValue:
            groupedData[id].currentPrice *
            (buy.sumOfAmounts - sell.sumOfAmounts),
        });
      }
      const profit = coins.reduce(
        (totalProfit, coin) => totalProfit + coin.profit,
        0
      );
      const currentPortfolioValue = coins.reduce(
        (totalValue, coin) => totalValue + coin.currentPortfolioValue,
        0
      );
      setPortfolioValue({
        profit: profit,
        coinsValue: currentPortfolioValue,
      });
      setCoinsSummary(coins);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCoinsList();
  }, [user]);

  return (
    <StyledCoinsOverview>
      <StyledSectionName>Coin overview</StyledSectionName>
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
          {coinsSummary?.map((coin) => {
            return (
              <StyledCoinsRow key={coin.name}>
                <td>{coin.name}</td>
                <td>{coin.currentPrice}</td>
                <td>{coin.transactionsBuy}</td>
                <td>{coin.transactionsSell}</td>
                <td>{coin.averageBuyPrice}</td>
                <td>{coin.averageSellPrice ? coin.averageSellPrice : "-"}</td>
                <td>{coin.totalMoneyInvested.toFixed(2)}</td>
                <td>{coin.totalMoneyWithdraw.toFixed(2)}</td>
                <td>{coin.profit.toFixed(2)}</td>
                <td>{coin.amount}</td>
                <td>{coin.currentPortfolioValue.toFixed(2)}</td>
              </StyledCoinsRow>
            );
          })}
        </tbody>
      </table>
    </StyledCoinsOverview>
  );
};

export default CoinsOverview;
