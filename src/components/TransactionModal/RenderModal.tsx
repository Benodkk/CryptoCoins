import { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

import padlock from "../../assets/padlock.png";
import padlockUnlock from "../../assets/padlock-unlock.png";

import CloseButton from "../CloseButton";

import { Coin } from "./interfaces";

import {
  StyledActionButton,
  StyledActionCol,
  StyledActionRow,
  StyledButtonsCol,
  StyledInput,
  StyledLogoRow,
  StyledModal,
  StyledModalHeadRow,
} from "./TransactionModal.styled";
import SuccessAnimation from "../SuccessConfirmation";

interface Props {
  coin: Coin;
  coinId: string;
  setAddTransaction: React.Dispatch<React.SetStateAction<string | null>>;
}

const RenderModal = ({ coin, coinId, setAddTransaction }: Props) => {
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState(false);

  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(coin.market_data.current_price.usd);
  const [inTotal, setInTotal] = useState(0);
  const [disable, setDisable] = useState("inTotal");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const runTimer = () => {
    setConfirmation(true);
    setTimeout(() => {
      setConfirmation(false);
    }, 3000);
  };

  const addCoin = async (type: string) => {
    setError(false);
    const user = auth.currentUser?.uid;
    const transactionsColletionRef = collection(
      db,
      "users",
      `${user}`,
      "transactions"
    );
    try {
      await addDoc(transactionsColletionRef, {
        name: coin?.name,
        symbol: coin?.symbol,
        coinId: coinId,
        amount: amount,
        price: price,
        date: date,
        type: type,
      });
      runTimer();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setAmount(0);
      setInTotal(0);
    }
  };

  const priceChange = (value: number, changeType: string) => {
    console.log(amount);
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
        <div>Add transaction</div>
        <CloseButton onClick={() => setAddTransaction(null)} />
      </StyledModalHeadRow>
      <StyledLogoRow>
        <div>{coin.symbol.toUpperCase()}</div>
        <img src={coin.image.large} />
      </StyledLogoRow>
      <StyledActionRow>
        {error ? (
          <div>Somthing went wrong, try again later!</div>
        ) : confirmation ? (
          <SuccessAnimation message="Transaction added!" />
        ) : (
          <StyledActionCol>
            <label>Amount:</label>
            <StyledInput
              disabled={disable === "amount"}
              value={
                disable === "amount"
                  ? Number(amount.toPrecision(5))
                  : amount || ""
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
              value={
                disable === "price" ? Number(price.toPrecision(5)) : price || ""
              }
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
              value={Number(inTotal.toFixed(2)) || ""}
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
              defaultValue={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setDate(e.target.value)}
            />
          </StyledActionCol>
        )}

        <StyledButtonsCol>
          <StyledActionButton
            onClick={() => addCoin("buy")}
            disabled={confirmation || amount == 0}
          >
            BUY!
          </StyledActionButton>
          <StyledActionButton
            onClick={() => addCoin("sell")}
            disabled={confirmation || amount == 0}
          >
            SELL!
          </StyledActionButton>
        </StyledButtonsCol>
      </StyledActionRow>
    </StyledModal>
  );
};

export default RenderModal;
