import { useState, useEffect } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

import padlock from "../../assets/padlock.png";
import padlockUnlock from "../../assets/padlock-unlock.png";

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
} from "./TransactionModal.styled";
import CloseButton from "../CloseButton";

interface Props {
  coinId: string;
  setAddTransaction: React.Dispatch<React.SetStateAction<string | null>>;
}

interface Coin {
  name: string;
  symbol: string;
  market_data: {
    current_price: {
      usd: string;
    };
  };
  image: {
    large: string;
  };
}

const TransactionModal = ({ coinId, setAddTransaction }: Props) => {
  const [coin, setCoin] = useState<Coin>();
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [inTotal, setInTotal] = useState(0);
  const [disable, setDisable] = useState("inTotal");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoin(fetchedData);
        setPrice(fetchedData.market_data.current_price.usd);
        console.log(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const addCoin = async (type: string) => {
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
        price: coin?.market_data.current_price.usd,
        date: date,
        type: type,
      });
    } catch (err) {
      console.error(err);
    }
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
            <CloseButton onClick={() => setAddTransaction(null)} />
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
                defaultValue={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setDate(e.target.value)}
              />
            </StyledActionCol>
            <StyledButtonsCol>
              <StyledActionButton onClick={() => addCoin("buy")}>
                BUY!
              </StyledActionButton>
              <StyledActionButton onClick={() => addCoin("sell")}>
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

export default TransactionModal;
