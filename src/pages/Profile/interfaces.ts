export interface CoinsSummary {
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

export interface Transaction {
  name: string;
  amount: number;
  coinId: string;
  date: string;
  id: string;
  price: number;
  type: string;
}

export interface PortfolioValue {
  profit: number;
  coinsValue: number;
}
