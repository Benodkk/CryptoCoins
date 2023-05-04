import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";

import Overview from "./Overview";
import TransactionHistory from "./TransactionHistory";
import CoinsOverview from "./CoinsOverview";
import { StyledMainContainer } from "./Profile.styled";
import Header from "../../components/Header";
import Tabs from "./Tabs";

interface PortfolioValue {
  profit: number;
  coinsValue: number;
}

const Profile = () => {
  const [portfolioValue, setPortfolioValue] = useState<PortfolioValue>();
  const [selectedTab, setSelectedTab] = useState("coins");

  return (
    <StyledMainContainer>
      <Header />
      <Overview portfolioValue={portfolioValue} />
      <Tabs setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      {selectedTab === "coins" ? (
        <CoinsOverview setPortfolioValue={setPortfolioValue} />
      ) : selectedTab === "transactions" ? (
        <TransactionHistory />
      ) : (
        <></>
      )}
    </StyledMainContainer>
  );
};

export default Profile;
