import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";

import Overview from "./Overview";
import TransactionHistory from "./TransactionHistory";
import CoinsOverview from "./CoinsOverview";
import { StyledMainContainer } from "./Profile.styled";
import Header from "../../components/Header";

const Profile = () => {
  const user = auth.currentUser?.uid;

  return (
    <StyledMainContainer>
      <Header />
      {/* <Overview transactions={transactions} /> */}
      <CoinsOverview />
      <TransactionHistory />
    </StyledMainContainer>
  );
};

export default Profile;
