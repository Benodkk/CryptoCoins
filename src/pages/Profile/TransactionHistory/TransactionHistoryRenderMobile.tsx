import { useState } from "react";

import useRoundNr from "../../../hooks/useRoundNr";

import SwitchListPage from "../SwitchListPage";

import { Transaction } from "../interfaces";
import {
  StyledButton,
  StyledChangeTd,
  StyledOneTransactionDetailsMobile,
  StyledOneTransactionMobile,
  StyledTransactionsHeaderMobile,
} from "./TransactionHistory.styled";

interface Props {
  transactions: Transaction[];
  setChangeTransaction: React.Dispatch<
    React.SetStateAction<Transaction | null>
  >;
  deleteTransaction: (id: string) => Promise<void>;
}
const TransactionHistoryRenderMobile = ({
  transactions,
  setChangeTransaction,
  deleteTransaction,
}: Props) => {
  const [page, setPage] = useState(1);
  const [showDetails, setShowDetails] = useState("");
  return (
    <>
      <table>
        <thead>
          <StyledTransactionsHeaderMobile>
            <th>Coin</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </StyledTransactionsHeaderMobile>
        </thead>
        <tbody>
          {transactions.slice(20 * (page - 1), 20 * page).map((transaction) => {
            return (
              <>
                <StyledOneTransactionMobile
                  key={transaction.id}
                  onClick={() => {
                    showDetails === transaction.id
                      ? setShowDetails("")
                      : setShowDetails(transaction.id);
                  }}
                >
                  <td>{transaction.name}</td>
                  <td>${useRoundNr(transaction.price)}</td>
                  <td>{useRoundNr(transaction.amount)}</td>
                  <td>${useRoundNr(transaction.amount * transaction.price)}</td>
                </StyledOneTransactionMobile>
                <StyledOneTransactionDetailsMobile
                  show={showDetails === transaction.id}
                >
                  <StyledChangeTd buy={transaction.type === "buy"}>
                    {transaction.type}
                  </StyledChangeTd>
                  <td>{transaction.date}</td>
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
                </StyledOneTransactionDetailsMobile>
              </>
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

export default TransactionHistoryRenderMobile;
