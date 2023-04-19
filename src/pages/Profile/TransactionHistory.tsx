import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";

const containerStyle: React.CSSProperties | undefined = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

const elementStyle: React.CSSProperties | undefined = {
  display: "flex",
  gap: "40px",
};

interface Props {
  transactions: {
    [x: string]: string | number;
  }[];
}

const TransactionHistory = ({ transactions }: Props) => {
  const user = auth.currentUser?.uid;

  return (
    <div style={containerStyle}>
      <div>Transaction history</div>
      {transactions.map((transaction) => {
        return (
          <div style={elementStyle}>
            <div>coin: {transaction.coinId}</div>
            <div>price: {transaction.price}</div>
            <div>Amount: {transaction.amount}</div>
            <div>Type: {transaction.type}</div>
            <div> Date: {transaction.date}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionHistory;
