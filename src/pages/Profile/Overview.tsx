import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import {
  StyledLogOut,
  StyledLogOutContainer,
  StyledOneStatContainer,
  StyledOneStatValue,
  StyledOverview,
  StyledOverviewContainer,
} from "./Profile.styled";
import { signOut } from "firebase/auth";

interface OverviewProps {
  portfolioValue:
    | {
        profit: number;
        coinsValue: number;
      }
    | undefined;
}

const Overview = ({ portfolioValue }: OverviewProps) => {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledOverviewContainer>
      <StyledOverview>
        <StyledLogOutContainer scroll={scroll > 30}>
          <div>
            <strong>Current Profile: </strong>
            {auth.currentUser?.email}
          </div>
          <StyledLogOut onClick={logOut}>Log out</StyledLogOut>
        </StyledLogOutContainer>
        {portfolioValue ? (
          <>
            <StyledOneStatContainer>
              <div>Transactions profit</div>
              <StyledOneStatValue positive={portfolioValue.profit > 0}>
                {portfolioValue.profit.toFixed(2)}
              </StyledOneStatValue>
            </StyledOneStatContainer>
            <StyledOneStatContainer>
              <div>Portfolio value</div>
              <StyledOneStatValue positive={portfolioValue.coinsValue > 0}>
                {portfolioValue.coinsValue.toFixed(2)}
              </StyledOneStatValue>
            </StyledOneStatContainer>
            <StyledOneStatContainer>
              <div>Overwall profit</div>
              <StyledOneStatValue
                positive={portfolioValue.profit + portfolioValue.coinsValue > 0}
              >
                {(portfolioValue.profit + portfolioValue.coinsValue).toFixed(2)}
              </StyledOneStatValue>
            </StyledOneStatContainer>
          </>
        ) : (
          <></>
        )}
      </StyledOverview>
    </StyledOverviewContainer>
  );
};

export default Overview;
