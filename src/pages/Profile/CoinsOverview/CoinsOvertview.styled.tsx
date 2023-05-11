import styled from "styled-components";
import { devices } from "../../../styles/deviceWidth";

export const StyledCoinsOverview = styled.section`
  margin: 20px 0px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${devices.desktop} {
    margin: 50px 0;
    padding: 0;
    width: 1024px;
  }
`;

export const StyledCoinsTopHeader = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 2fr 2fr 2fr 1fr 2fr;
  text-align: center;
  height: 50px;
  width: 100%;
  @media ${devices.desktop} {
    width: 1024px;
  }
  th {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-left: white 1px solid;
    padding: 0 5px;
    &:last-child {
      border-right: white 1px solid;
    }
    font-size: 16px;
    @media ${devices.desktop} {
      font-size: 20px;
    }
  }
`;

export const StyledCoinsBottomHeader = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(11, 1fr);
  text-align: center;
  height: 50px;
  border-bottom: 1px solid white;
  width: 100%;
  @media ${devices.desktop} {
    width: 1024px;
  }
  th {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-left: white 1px solid;
    &:last-child {
      border-right: white 1px solid;
    }
    font-size: 16px;
    @media ${devices.desktop} {
      font-size: 20px;
    }
  }
`;

export const StyledCoinsRow = styled.tr`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(11, 1fr);
  text-align: center;
  height: 50px;
  border-bottom: 1px solid white;
  width: 100%;
  @media ${devices.desktop} {
    width: 1024px;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverDark};
  }
  td {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    @media ${devices.desktop} {
      font-size: 16px;
    }
  }
`;

// Coins overview Mobile

export const StyledCoinsHeaderMobile = styled.tr`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;

export const StyledCoinRowMobile = styled.tr`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-content: space-between;
  height: 30px;

  width: 100%;
  border-top: white 1px solid;
  margin-top: 5px;
  padding-top: 5px;
`;

interface StyledTransactionMobileProps {
  show: boolean;
}

export const StyledTransactionMobile = styled.tr<StyledTransactionMobileProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100%;
  gap: 5px;
  img {
    height: 16px;
    transform: ${({ show }) =>
      show ? "translateY(2px) rotateX(180deg)" : "translateY(2px) rotateX(0)"};
  }
`;

interface StyledTransactionLabelsMobileProps {
  show: boolean;
}

export const StyledTransactionLabelsMobile = styled.tr<StyledTransactionLabelsMobileProps>`
  font-size: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-content: space-between;
  height: ${({ show }) => (show ? "24px" : 0)};
  width: 100%;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

interface StyledTransactionDetailsMobileProps {
  show: boolean;
}

export const StyledTransactionDetailsMobile = styled.tr<StyledTransactionDetailsMobileProps>`
  font-size: 12px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-content: space-between;
  height: ${({ show }) => (show ? "24px" : 0)};
  width: 100%;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;
