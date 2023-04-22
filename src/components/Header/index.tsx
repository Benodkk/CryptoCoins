import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledMenu,
  StyledNavigate,
} from "./Header.styled";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <StyledLogo>CryptoCoins</StyledLogo>
        <StyledMenu>
          <StyledNavigate>Market</StyledNavigate>
          <StyledNavigate>Profile</StyledNavigate>
          <StyledNavigate>Search</StyledNavigate>
        </StyledMenu>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;
