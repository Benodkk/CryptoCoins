export interface Coin {
  name: string;
  symbol: string;
  market_data: {
    current_price: {
      usd: number;
    };
  };
  image: {
    large: string;
  };
}
