import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db, auth } from "../../config/firebase";

const BuySell = () => {
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const addCoin = async (coinId: number, type: string) => {
    const user = auth.currentUser?.uid;
    const transactionsColletionRef = collection(
      db,
      "users",
      `${user}`,
      "transactions"
    );
    try {
      await addDoc(transactionsColletionRef, {
        coinId: coinId,
        amount: amount,
        price: price,
        date: date,
        type: type,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div>Add transaction</div>
      <label>Amount:</label>
      <input
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <label>Price:</label>
      <input type="number" onChange={(e) => setPrice(Number(e.target.value))} />
      <input
        type="date"
        defaultValue={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={() => addCoin(2, "buy")}>BUY!</button>
      <button onClick={() => addCoin(1, "sell")}>SELL!</button>
    </div>
  );
};

export default BuySell;
