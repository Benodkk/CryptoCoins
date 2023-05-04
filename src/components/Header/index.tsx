import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledMenu,
  StyledNavigate,
} from "./Header.styled";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import Search from "../Search";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(window.scrollY);
  const [search, setSearch] = useState(false);

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
            {auth.currentUser ? "Profile" : "Sign in"}
          </StyledNavigate>
          {search ? (
            <Search setSearch={setSearch} />
          ) : (
            <StyledNavigate onClick={() => setSearch(true)}>
              Search
            </StyledNavigate>
          )}
        </StyledMenu>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;
