import { useState, useEffect } from "react";

import { BeatLoader } from "react-spinners";

import CloseButton from "../CloseButton";
import RenderModal from "./RenderModal";
import FetchError from "../FetchError";

import { Coin } from "./interfaces";

import {
  StyledModal,
  StyledModalContainer,
  StyledModalHeadRow,
} from "./DetailsModal.styled";

interface Props {
  coinId: string;
  setShowDetails: React.Dispatch<React.SetStateAction<string | null>>;
  setAddTransaction: React.Dispatch<React.SetStateAction<string | null>>;
}

const DetailsModal = ({ coinId, setShowDetails, setAddTransaction }: Props) => {
  const [coin, setCoin] = useState<Coin>();
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

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
        <BeatLoader color={"#ffffff"} />
      ) : coin?.id ? (
        <RenderModal
          coin={coin}
          setAddTransaction={setAddTransaction}
          setShowDetails={setShowDetails}
        />
      ) : (
        <StyledModal>
          <StyledModalHeadRow>
            <div>Change transaction</div>
            <CloseButton onClick={() => setAddTransaction(null)} />
          </StyledModalHeadRow>
          <FetchError />
        </StyledModal>
      )}
    </StyledModalContainer>
  );
};
export default DetailsModal;
