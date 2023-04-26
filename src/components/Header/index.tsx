import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledMenu,
  StyledNavigate,
} from "./Header.styled";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";

const Header = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(window.scrollY);
  const [isLogIn, setIsLogIn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
  });

  return (
    <StyledHeaderContainer scroll={scroll > 100}>
      <StyledHeader>
        <StyledLogo onClick={() => navigate("/")}>CryptoCoins</StyledLogo>
        <StyledMenu>
          <StyledNavigate onClick={() => navigate("/m24")}>
            Search
          </StyledNavigate>
          <StyledNavigate onClick={() => navigate("/market/1")}>
            Market
          </StyledNavigate>
          <StyledNavigate
            onClick={() => navigate("/profile", { replace: true })}
          >
            {isLogIn ? "Profile" : "Sign in"}
          </StyledNavigate>
        </StyledMenu>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;
