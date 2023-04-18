import Auth from "./components/auth/Auth";

import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "./config/firebase";
import { useEffect, useState } from "react";
import BuySell from "./components/interact/BuySell";
import Profile from "./pages/Profile";

const style: React.CSSProperties | undefined = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

function App() {
  return (
    <div style={style}>
      <Auth />
      <BuySell />
      <Profile />
    </div>
  );
}

export default App;
