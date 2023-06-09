import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import SignIn from "./pages/SignIn";
import MainSite from "./pages/MainSite";
import MarketUpdate from "./pages/MarketUpdate";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/market/:page_nr" element={<MarketUpdate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default RouteSwitch;
