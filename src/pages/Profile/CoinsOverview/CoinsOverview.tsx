import { useState, useEffect } from "react";

import { BeatLoader } from "react-spinners";

import { db, auth } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

import { CoinsSummary, Transaction, PortfolioValue } from "../interfaces";

import NoTrasactions from "../NoTrasactions";
import CoinsOverviewRender from "./CoinsOverviewRender";
import CoinsOverviewRenderMobile from "./CoinsOverviewRenderMobile";
import FetchError from "../../../components/FetchError";

import { StyledCoinsOverview } from "./CoinsOvertview.styled";
import { useMediaQuery } from "react-responsive";
import { reactDevice } from "../../../styles/deviceWidth";

interface SortedCoins {
  [x: string]: {
    transactions: Transaction[];
    currentPrice: number;
  };
}

interface Props {
  setPortfolioValue: React.Dispatch<
    React.SetStateAction<PortfolioValue | undefined>
  >;
}

const CoinsOverview = ({ setPortfolioValue }: Props) => {
  const [coinsSummary, setCoinsSummary] = useState<CoinsSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const isTablet = useMediaQuery(reactDevice.tablet);
  const user = auth.currentUser?.uid;

  const getCoinsList = async () => {
    setLoading(true);
    setError(false);
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
        const coin = {
          name: groupedData[id].transactions[0].name,
          currentPrice: groupedData[id].currentPrice,
          transactionsBuy: buy.count,
          transactionsSell: sell.count,
          averageBuyPrice: buy.count ? buy.sumOfInvested / buy.sumOfAmounts : 0,
          averageSellPrice: sell.count
            ? sell.sumOfInvested / sell.sumOfAmounts
            : 0,
          totalMoneyInvested: buy.sumOfInvested,
          totalMoneyWithdraw: sell.sumOfInvested,
          profit: sell.sumOfInvested - buy.sumOfInvested,
          amount: buy.sumOfAmounts - sell.sumOfAmounts,
          currentPortfolioValue:
            groupedData[id].currentPrice *
            (buy.sumOfAmounts - sell.sumOfAmounts),
        };
        coins.push(coin);
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
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoinsList();
  }, [user]);

  return (
    <StyledCoinsOverview>
      {loading ? (
        <BeatLoader color="white" />
      ) : error ? (
        <FetchError />
      ) : coinsSummary.length ? (
        isTablet ? (
          <CoinsOverviewRender coinsSummary={coinsSummary} />
        ) : (
          <CoinsOverviewRenderMobile coinsSummary={coinsSummary} />
        )
      ) : (
        <NoTrasactions />
      )}
    </StyledCoinsOverview>
  );
};

export default CoinsOverview;
