import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainSite from "./pages/MainSite";
import MarketUpdate from "./pages/MarketUpdate";
import Profile from "./pages/Profile";

const RouteSwitch = () => {
  return (
    <HashRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/market/:page_nr" element={<MarketUpdate />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </HashRouter>
  );
};

export default RouteSwitch;
