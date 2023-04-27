import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import {
  StyledButton,
  StyledButtonsContainer,
  StyledChangeTd,
  StyledOneTransaction,
  StyledTransactionHistory,
  StyledTransactionsHeader,
} from "./Profile.styled";
import ChangeModal from "../../components/Modals/ChangeModal";
import { StyledSectionName } from "../MainSite/MainSite.styled";

interface Transaction {
  id: string;
  name: string;
  price: number;
  amount: number;
  coinId: string;
  date: string;
  type: string;
}

const TransactionHistory = () => {
  const user = auth.currentUser?.uid;

  const [transactions, setTransactions] = useState<Transaction[]>();
  const [changeTransaction, setChangeTransaction] =
    useState<Transaction | null>(null);

  const getTransactionsList = async () => {
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
          id: doc.id,
        };
      });
      console.log(data);
      filteredData.sort((a, b) => {
        const dateA: any = new Date(a.date);
        const dateB: any = new Date(b.date);
        return dateA - dateB;
      });
      setTransactions(filteredData);
    } catch (err) {}
  };

  const deleteTransaction = async (id: string) => {
    const movieDoc = doc(db, "users", `${user}`, "transactions", id);
    await deleteDoc(movieDoc);
    getTransactionsList();
  };

  useEffect(() => {
    getTransactionsList();
  }, [user, changeTransaction]);

  const roundNumber = (num: number) => {
    if (num >= 1000) {
      return num.toFixed(0);
    } else {
      return num.toFixed(2);
    }
  };

  return (
    <StyledTransactionHistory>
      <StyledSectionName>Transaction history</StyledSectionName>
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
          {transactions ? (
            transactions.map((transaction) => {
              return (
                <StyledOneTransaction>
                  <td>{transaction.name}</td>
                  <td>${transaction.price}</td>
                  <td>{transaction.amount}</td>
                  <td>
                    ${roundNumber(transaction.amount * transaction.price)}
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
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>

      {changeTransaction && (
        <ChangeModal
          transaction={changeTransaction}
          setChangeTransaction={setChangeTransaction}
        />
      )}
    </StyledTransactionHistory>
  );
};

export default TransactionHistory;
