import Auth from "./components/auth/Auth";

import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "./config/firebase";
import { useEffect, useState } from "react";
import BuySell from "./components/interact/BuySell";
import Profile from "./pages/Profile";
import List from "./pages/List";
import MainSite from "./pages/MainSite";

const style: React.CSSProperties | undefined = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

function App() {
  return (
    <div style={style}>
      <MainSite />
    </div>
  );
}

export default App;
