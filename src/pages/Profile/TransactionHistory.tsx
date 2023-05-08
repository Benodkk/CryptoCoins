import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

import NoTrasactions from "./NoTrasactions";
import TransactionHistoryRender from "./TransactionHistoryRender";
import ChangeModal from "../../components/ChangeModal";
import FetchError from "../../components/FetchError";

import { Transaction } from "./interfaces";

import { StyledTransactionHistory } from "./Profile.styled";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [changeTransaction, setChangeTransaction] =
    useState<Transaction | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const user = auth.currentUser?.uid;

  const getTransactionsList = async () => {
    setLoading(true);
    setError(false);
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
      filteredData.sort((a, b) => {
        const dateA: any = new Date(a.date);
        const dateB: any = new Date(b.date);
        return dateB - dateA;
      });
      setTransactions(filteredData);
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteTransaction = async (id: string) => {
    const movieDoc = doc(db, "users", `${user}`, "transactions", id);
    await deleteDoc(movieDoc);
    getTransactionsList();
  };

  useEffect(() => {
    getTransactionsList();
  }, [user, changeTransaction]);

  return (
    <StyledTransactionHistory>
      {loading ? (
        <BeatLoader color="white" />
      ) : error ? (
        <FetchError />
      ) : transactions?.length ? (
        <TransactionHistoryRender
          transactions={transactions}
          setChangeTransaction={setChangeTransaction}
          deleteTransaction={deleteTransaction}
        />
      ) : (
        <NoTrasactions />
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
