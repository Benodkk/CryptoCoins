import { useState } from "react";

import useRoundNr from "../../../hooks/useRoundNr";

import SwitchListPage from "../SwitchListPage";

import { Transaction } from "../interfaces";

import {
  StyledButton,
  StyledButtonsContainer,
  StyledChangeTd,
  StyledOneTransaction,
  StyledTransactionsHeader,
} from "./TransactionHistory.styled";

interface Props {
  transactions: Transaction[];
  setChangeTransaction: React.Dispatch<
    React.SetStateAction<Transaction | null>
  >;
  deleteTransaction: (id: string) => Promise<void>;
}
const TransactionHistoryRender = ({
  transactions,
  setChangeTransaction,
  deleteTransaction,
}: Props) => {
  const [page, setPage] = useState(1);

  return (
    <>
      <table>
        <thead>
          <StyledTransactionsHeader>
            <th>Coin</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
            <th>Type</th>
            <th>Date</th>
          </StyledTransactionsHeader>
        </thead>
        <tbody>
          {transactions.slice(20 * (page - 1), 20 * page).map((transaction) => {
            return (
              <StyledOneTransaction key={transaction.id}>
                <td>{transaction.name}</td>
                <td>${useRoundNr(transaction.price)}</td>
                <td>{useRoundNr(transaction.amount)}</td>
                <td>
                  ${Number(transaction.amount * transaction.price).toFixed(2)}
                </td>
                <StyledChangeTd buy={transaction.type === "buy"}>
                  {transaction.type}
                </StyledChangeTd>
                <td>{transaction.date}</td>
                <StyledButtonsContainer>
                  <StyledButton
                    onClick={() => setChangeTransaction(transaction)}
                  >
                    Change
                  </StyledButton>
                  <StyledButton
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    Delete
                  </StyledButton>
                </StyledButtonsContainer>
              </StyledOneTransaction>
            );
          })}
        </tbody>
      </table>
      <SwitchListPage
        pages={Math.ceil(transactions.length / 20)}
        page_nr={page}
        setPage={setPage}
      />
    </>
  );
};

export default TransactionHistoryRender;
