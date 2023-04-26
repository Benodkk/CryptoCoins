import { useState, useEffect } from "react";

import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

import close from "../../assets/close.png";

import {
  CloseButton,
  StyledActionButton,
  StyledActionCol,
  StyledActionRow,
  StyledButtonsCol,
  StyledInput,
  StyledLogoRow,
  StyledModal,
  StyledModalContainer,
  StyledModalHeadRow,
} from "./Modals.styled";

interface Transaction {
  id: string;
  name: string;
  price: number;
  amount: number;
  coinId: string;
  date: string;
  type: string;
}

interface Props {
  transaction: Transaction;
  setChangeTransaction: React.Dispatch<
    React.SetStateAction<Transaction | null>
  >;
}

interface Coin {
  symbol: string;
  image: {
    large: string;
  };
}

const ChangeModal = ({ transaction, setChangeTransaction }: Props) => {
  const [coin, setCoin] = useState<Coin>();
  const [amount, setAmount] = useState(transaction.amount);
  const [price, setPrice] = useState(transaction.price);
  const [date, setDate] = useState(transaction.date);

  const url = `https://api.coingecko.com/api/v3/coins/${transaction.coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoin(fetchedData);
        console.log(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const changeTransaction = async (type: string) => {
    const user = auth.currentUser?.uid;
    const transactionDoc = doc(
      db,
      "users",
      `${user}`,
      "transactions",
      transaction.id
    );
    try {
      await updateDoc(transactionDoc, {
        coinId: transaction.coinId,
        amount: amount,
        price: price,
        date: date,
        type: type,
      });
    } catch (err) {
      console.error(err);
    }
    setChangeTransaction(null);
  };

  return (
    <StyledModalContainer>
      {coin ? (
        <StyledModal>
          <StyledModalHeadRow>
            <div>Add transaction</div>
            <CloseButton
              onClick={() => setChangeTransaction(null)}
              src={close}
            />
          </StyledModalHeadRow>
          <StyledLogoRow>
            <div>{coin.symbol.toUpperCase()}</div>
            <img src={coin.image.large} />
          </StyledLogoRow>
          <StyledActionRow>
            <StyledActionCol>
              <label>Amount:</label>
              <StyledInput
                defaultValue={transaction.amount}
                type="number"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <label>Price:</label>
              <StyledInput
                defaultValue={transaction.price}
                type="number"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <label>Date:</label>
              <StyledInput
                type="date"
                defaultValue={transaction.date}
                onChange={(e) => setDate(e.target.value)}
              />
            </StyledActionCol>
            <StyledButtonsCol>
              <StyledActionButton onClick={() => changeTransaction("buy")}>
                BUY!
              </StyledActionButton>
              <StyledActionButton onClick={() => changeTransaction("sell")}>
                SELL!
              </StyledActionButton>
            </StyledButtonsCol>
          </StyledActionRow>
        </StyledModal>
      ) : (
        <></>
      )}
    </StyledModalContainer>
  );
};

export default ChangeModal;
