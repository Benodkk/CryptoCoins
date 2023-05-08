import { useState } from "react";

import Overview from "./Overview";
import TransactionHistory from "./TransactionHistory";
import CoinsOverview from "./CoinsOverview";
import Tabs from "./Tabs";

import { PortfolioValue } from "./interfaces";

import { StyledMainContainer } from "./Profile.styled";

const Profile = () => {
  const [portfolioValue, setPortfolioValue] = useState<PortfolioValue>();
  const [selectedTab, setSelectedTab] = useState("coins");

  return (
    <StyledMainContainer>
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
