import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";

import Overview from "./Overview";
import TransactionHistory from "./TransactionHistory";
import CoinsOverview from "./CoinsOverview";

const Profile = () => {
  const user = auth.currentUser?.uid;
  const [transactions, setTransactions] = useState<
    {
      [x: string]: string | number;
    }[]
  >([]);
  const [sortedCoins, setSortedCoins] = useState({});

  useEffect(() => {
    const getTransactionsList = async () => {
      const transactionsColletionRef = collection(
        db,
        "users",
        `${user}`,
        "transactions"
      );
      try {
        const data = await getDocs(transactionsColletionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
        }));
        console.log(filteredData);
        setTransactions(filteredData);
        const groupedData = filteredData.reduce((acc, curr) => {
          const id = curr.coinId;
          if (!acc[id]) {
            acc[id] = [];
          }
          acc[id].push(curr);
          return acc;
        }, {});
        setSortedCoins(groupedData);
      } catch (err) {
        console.error(err);
      }
    };

    getTransactionsList();
  }, [user]);
  return (
    <div>
      <Overview transactions={transactions} />
      <CoinsOverview sortedCoins={sortedCoins} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default Profile;
