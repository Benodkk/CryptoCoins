import { useState, useEffect } from "react";

import { BeatLoader } from "react-spinners";

import FetchError from "../FetchError";
import RenderModal from "./RenderModal";
import CloseButton from "../CloseButton";

import { Transaction, Coin } from "./interfaces";

import theme from "../../styles/theme";
import {
  StyledModal,
  StyledModalContainer,
  StyledModalHeadRow,
} from "./ChangeModal.styled";

interface Props {
  transaction: Transaction;
  setChangeTransaction: React.Dispatch<
    React.SetStateAction<Transaction | null>
  >;
}

const ChangeModal = ({ transaction, setChangeTransaction }: Props) => {
  const [coin, setCoin] = useState<Coin>();
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/${transaction.coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setCoin(fetchedData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <StyledModalContainer>
      {loading ? (
        <BeatLoader color={theme.colors.main} />
      ) : coin?.symbol ? (
        <RenderModal
          transaction={transaction}
          setChangeTransaction={setChangeTransaction}
          coin={coin}
        />
      ) : (
        <StyledModal>
          <StyledModalHeadRow>
            <div>Change transaction</div>
            <CloseButton onClick={() => setChangeTransaction(null)} />
          </StyledModalHeadRow>
          <FetchError />
        </StyledModal>
      )}
    </StyledModalContainer>
  );
};

export default ChangeModal;
