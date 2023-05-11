import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  display: flex;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 2px 2px 5px 5px rgb(15, 16, 32);
`;

export const StyledFooterLink = styled.div`
  font-weight: 700;
  a:-webkit-any-link,
  a {
    transition: color 0.3s;
    color: white;
    text-decoration: none;
    &:hover {
      text-shadow: 0.4px 0.4px 1px white;
    }
  }
`;
