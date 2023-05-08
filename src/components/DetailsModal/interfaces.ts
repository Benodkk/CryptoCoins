export interface Coin {
  id: string;
  name: string;
  symbol: string;
  market_data: {
    ath: {
      usd: number;
    };
    ath_change_percentage: {
      usd: number;
    };
    ath_date: {
      usd: string;
    };
    price_change_percentage_1h_in_currency: {
      usd: number;
    };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
  };
  market_cap_rank: number;

  image: {
    large: string;
  };
}
