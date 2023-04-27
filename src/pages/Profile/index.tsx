import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";

import Overview from "./Overview";
import TransactionHistory from "./TransactionHistory";
import CoinsOverview from "./CoinsOverview";
import { StyledMainContainer } from "./Profile.styled";
import Header from "../../components/Header";

interface PortfolioValue {
  profit: number;
  coinsValue: number;
}

const Profile = () => {
  const [portfolioValue, setPortfolioValue] = useState<PortfolioValue>();

  return (
    <StyledMainContainer>
      <Header />
      <Overview portfolioValue={portfolioValue} />
      <CoinsOverview setPortfolioValue={setPortfolioValue} />
      <TransactionHistory />
    </StyledMainContainer>
  );
};

export default Profile;
