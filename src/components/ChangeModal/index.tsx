import { useState, useEffect } from "react";

import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

import padlock from "../../assets/padlock.png";
import padlockUnlock from "../../assets/padlock-unlock.png";

import CloseButton from "../CloseButton";
import {
  StyledActionButton,
  StyledActionCol,
  StyledActionRow,
  StyledButtonsCol,
  StyledInput,
  StyledLogoRow,
  StyledModal,
  StyledModalContainer,
  StyledModalHeadRow,
} from "./ChangeModal.styled";
import useRoundNr from "../../hooks/useRoundNr";

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
  const [inTotal, setInTotal] = useState(
    useRoundNr(transaction.price * transaction.amount)
  );
  const [disable, setDisable] = useState("inTotal");
  const [date, setDate] = useState(transaction.date);

  const url = `https://api.coingecko.com/api/v3/coins/${transaction.coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoin(fetchedData);
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

  const priceChange = (value: number, changeType: string) => {
    if (changeType == "amount") {
      setAmount(value);
      if (disable === "price") {
        setPrice(value * inTotal);
      }
      if (disable === "inTotal") {
        setInTotal(value * price);
      }
    }
    if (changeType == "price") {
      setPrice(value);
      if (disable === "amount") {
        setAmount(value * inTotal);
      }
      if (disable === "inTotal") {
        setInTotal(value * amount);
      }
    }
    if (changeType == "inTotal") {
      setInTotal(value);
      if (disable === "amount") {
        setAmount(value / price);
      }
      if (disable === "price") {
        setPrice(value / amount);
      }
    }
  };

  return (
    <StyledModalContainer>
      {coin ? (
        <StyledModal>
          <StyledModalHeadRow>
            <div>Add transaction</div>
            <CloseButton onClick={() => setChangeTransaction(null)} />
          </StyledModalHeadRow>
          <StyledLogoRow>
            <div>{coin.symbol.toUpperCase()}</div>
            <img src={coin.image.large} />
          </StyledLogoRow>
          <StyledActionRow>
            <StyledActionCol>
              <label>Amount:</label>
              <StyledInput
                disabled={disable === "amount"}
                value={amount}
                type="number"
                onChange={(e) => priceChange(Number(e.target.value), "amount")}
              />
              <img
                onClick={() => setDisable("amount")}
                src={disable === "amount" ? padlock : padlockUnlock}
                alt="lock"
              />

              <label>Price($):</label>
              <StyledInput
                disabled={disable === "price"}
                value={price}
                type="number"
                onChange={(e) => priceChange(Number(e.target.value), "price")}
              />
              <img
                onClick={() => setDisable("price")}
                src={disable === "price" ? padlock : padlockUnlock}
                alt="lock"
              />

              <label>In total($):</label>
              <StyledInput
                disabled={disable === "inTotal"}
                value={inTotal}
                type="number"
                onChange={(e) => priceChange(Number(e.target.value), "inTotal")}
              />
              <img
                onClick={() => setDisable("inTotal")}
                src={disable === "inTotal" ? padlock : padlockUnlock}
                alt="lock"
              />

              <label>Date:</label>
              <StyledInput
                type="date"
                value={date}
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
