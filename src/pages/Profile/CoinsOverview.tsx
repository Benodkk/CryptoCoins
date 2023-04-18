interface Props {
  sortedCoins: {
    [x: string]: any;
  };
}

const CoinsOverview = ({ sortedCoins }: Props) => {
  let coins = [];
  for (let id in sortedCoins) {
    let buyPrice = {
      sumOfProducts: 0,
      sumOfAmounts: 0,
    };

    let sellPrice = {
      sumOfProducts: 0,
      sumOfAmounts: 0,
    };
    let amount = 0;

    sortedCoins[id].forEach(
      (coin: { amount: number; price: number; type: string }) => {
        const product = coin.amount * coin.price;
        if (coin.type === "buy") {
          buyPrice.sumOfProducts += product;
          buyPrice.sumOfAmounts += coin.amount;
        }
        if (coin.type === "sell") {
          sellPrice.sumOfProducts += product;
          sellPrice.sumOfAmounts += coin.amount;
        }
        amount += coin.amount;
      }
    );

    const averageBuyPrice = buyPrice.sumOfProducts / buyPrice.sumOfAmounts;
    const averageSellPrice = sellPrice.sumOfProducts / sellPrice.sumOfAmounts;

    coins.push({
      icon: "API",
      short: "API",
      amount: amount,
      currentPrice: "API",
      currentPortfolioValue: "API+",
      averageBuyPrice: averageBuyPrice,
      averageSellPrice: averageSellPrice,
      profit: 0,
    });
  }

  return <div></div>;
};

export default CoinsOverview;
