import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Search from "../Search";

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledMenu,
  StyledNavigate,
} from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [scroll, setScroll] = useState(window.scrollY);
  const [search, setSearch] = useState(false);
  const [loged, setLoged] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  const changeSite = (url: string) => {
    if (location.pathname !== url) {
      navigate(url);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoged(true);
      } else {
        setLoged(false);
      }
    });
    return unsubscribe;
  }, [auth]);

  return (
    <StyledHeaderContainer scroll={scroll > 100}>
      <StyledHeader>
        <StyledLogo onClick={() => changeSite("/")}>CryptoCoins</StyledLogo>
        <StyledMenu>
          <StyledNavigate onClick={() => changeSite("/market/1")}>
            Market
          </StyledNavigate>
          <StyledNavigate
            onClick={() =>
              changeSite(auth.currentUser ? "/profile" : "/sign_in")
            }
          >
            {loged ? "Profile" : "Sign In"}
          </StyledNavigate>
          <Search setSearch={setSearch} search={search} />
        </StyledMenu>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;
