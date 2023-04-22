import { useState, useEffect } from "react";

import { addDoc, collection } from "firebase/firestore";
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
} from "./TransactionModal.styled";

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

  const addCoin = async (coinId: string, type: string) => {
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
    <StyledModalContainer>
      {coin ? (
        <StyledModal>
          <StyledModalHeadRow>
            <div>Add transaction</div>
            <CloseButton onClick={() => setAddTransaction(null)} src={close} />
          </StyledModalHeadRow>
          <StyledLogoRow>
            <div>{coin.symbol.toUpperCase()}</div>
            <img src={coin.image.large} />
          </StyledLogoRow>
          <StyledActionRow>
            <StyledActionCol>
              <label>Amount:</label>
              <StyledInput
                type="number"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <label>Price:</label>
              <StyledInput
                defaultValue={coin.market_data.current_price.usd}
                type="number"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <label>Date:</label>
              <StyledInput
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setDate(e.target.value)}
              />
            </StyledActionCol>
            <StyledButtonsCol>
              <StyledActionButton onClick={() => addCoin(coinId, "buy")}>
                BUY!
              </StyledActionButton>
              <StyledActionButton onClick={() => addCoin(coinId, "sell")}>
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
