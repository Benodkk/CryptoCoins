import { useState } from "react";

import padlock from "../../assets/padlock.png";
import padlockUnlock from "../../assets/padlock-unlock.png";

import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

import CloseButton from "../CloseButton";

import { Transaction } from "./interfaces";

import {
  StyledActionButton,
  StyledActionCol,
  StyledActionRow,
  StyledButtonsCol,
  StyledInput,
  StyledLogoRow,
  StyledModal,
  StyledModalHeadRow,
} from "./ChangeModal.styled";

interface Props {
  transaction: Transaction;
  setChangeTransaction: React.Dispatch<
    React.SetStateAction<Transaction | null>
  >;
  coin: {
    symbol: string;
    image: {
      large: string;
    };
  };
}

const RenderModal = ({ transaction, setChangeTransaction, coin }: Props) => {
  const [amount, setAmount] = useState(transaction.amount);
  const [price, setPrice] = useState(transaction.price);
  const [inTotal, setInTotal] = useState(
    transaction.price * transaction.amount
  );
  const [disable, setDisable] = useState("inTotal");
  const [date, setDate] = useState(transaction.date);

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
    <StyledModal>
      <StyledModalHeadRow>
        <div>Change transaction</div>
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
            value={
              disable === "amount" ? Number(amount.toPrecision(5)) : amount
            }
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
            value={disable === "price" ? Number(price.toPrecision(5)) : price}
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
            value={Number(inTotal.toFixed(2))}
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
  );
};

export default RenderModal;
