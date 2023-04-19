import { useState } from "react";
import { useEffect } from "react";

interface Props {
  sortedCoins: {
    [x: string]: any;
  };
}

interface CoinsSummary {
  icon: string;
  short: string;
  amount: number;
  currentPrice: string;
  currentPortfolioValue: string;
  averageBuyPrice: number;
  totalMoneyInvested: number;
  averageSellPrice: number;
  totalMoneyWithdraw: number;
  profit: number;
}

const containerStyle: React.CSSProperties | undefined = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

const elementStyle: React.CSSProperties | undefined = {
  display: "flex",
  gap: "40px",
};

const CoinsOverview = ({ sortedCoins }: Props) => {
  const [coinsSummary, setCoinsSummary] = useState<CoinsSummary[] | null>(null);
  useEffect(() => {
    let coins: CoinsSummary[] = [];
    for (let id in sortedCoins) {
      let buyPrice = {
        sumOfInvested: 0,
        sumOfAmounts: 0,
      };

      let sellPrice = {
        sumOfInvested: 0,
        sumOfAmounts: 0,
      };
      let amount = 0;

      sortedCoins[id].forEach(
        (coin: { amount: number; price: number; type: string }) => {
          const invested = coin.amount * coin.price;
          if (coin.type === "buy") {
            buyPrice.sumOfInvested += invested;
            buyPrice.sumOfAmounts += coin.amount;
          }
          if (coin.type === "sell") {
            sellPrice.sumOfInvested += invested;
            sellPrice.sumOfAmounts += coin.amount;
          }
          amount += coin.amount;
        }
      );

      const averageBuyPrice = buyPrice.sumOfInvested / buyPrice.sumOfAmounts;
      const averageSellPrice = sellPrice.sumOfInvested / sellPrice.sumOfAmounts;

      coins.push({
        icon: "API",
        short: "API",
        amount: amount,
        currentPrice: "API",
        currentPortfolioValue: "API+",
        averageBuyPrice: averageBuyPrice,
        totalMoneyInvested: buyPrice.sumOfInvested,
        averageSellPrice: averageSellPrice,
        totalMoneyWithdraw: sellPrice.sumOfInvested,
        profit: sellPrice.sumOfInvested - buyPrice.sumOfInvested,
      });
    }
    setCoinsSummary(coins);
  }, []);

  return (
    <div style={containerStyle}>
      Coins Overview
      {coinsSummary?.map((coin) => {
        return (
          <div style={elementStyle}>
            <div>{coin.short}</div>
            <div>{coin.amount}</div>
            <div>{coin.averageBuyPrice}</div>
            <div>{coin.totalMoneyInvested}</div>
            <div>{coin.averageSellPrice ? coin.averageSellPrice : 0}</div>
            <div>{coin.totalMoneyWithdraw}</div>
            <div>{coin.profit}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CoinsOverview;
