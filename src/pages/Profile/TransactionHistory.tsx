import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import {
  StyledButton,
  StyledButtonsContainer,
  StyledChangeDiv,
  StyledOneTransaction,
  StyledTransactionHistory,
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
        };
      });
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
      <StyledOneTransaction>
        <div>Coin</div>
        <div>Price</div>
        <div>Amount</div>
        <div>Total</div>
        <div>Type</div>
        <div>Date</div>
      </StyledOneTransaction>
      {transactions ? (
        transactions.map((transaction) => {
          return (
            <StyledOneTransaction>
              <div>{transaction.name}</div>
              <div>${transaction.price}</div>
              <div>{transaction.amount}</div>
              <div>${roundNumber(transaction.amount * transaction.price)}</div>
              <StyledChangeDiv buy={transaction.type === "buy"}>
                {transaction.type}
              </StyledChangeDiv>
              <div>{transaction.date}</div>
              <StyledButtonsContainer>
                <StyledButton onClick={() => setChangeTransaction(transaction)}>
                  Change
                </StyledButton>
                <StyledButton onClick={() => deleteTransaction(transaction.id)}>
                  Delete
                </StyledButton>
              </StyledButtonsContainer>
            </StyledOneTransaction>
          );
        })
      ) : (
        <></>
      )}
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
