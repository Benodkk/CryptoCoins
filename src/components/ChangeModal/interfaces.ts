export interface Transaction {
  id: string;
  name: string;
  price: number;
  amount: number;
  coinId: string;
  date: string;
  type: string;
}

export interface Coin {
  symbol: string;
  image: {
    large: string;
  };
}
