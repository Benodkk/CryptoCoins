import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import {
  StyledLogOut,
  StyledLogOutContainer,
  StyledOneStatContainer,
  StyledOverview,
  StyledOverviewContainer,
} from "./Profile.styled";

interface OverviewProps {
  portfolioValue:
    | {
        profit: number;
        coinsValue: number;
      }
    | undefined;
}

const Overview = ({ portfolioValue }: OverviewProps) => {
  const user = auth.currentUser?.uid;

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

  return (
    <StyledOverviewContainer>
      <StyledOverview>
        <StyledLogOutContainer scroll={scroll > 30}>
          <div>
            <strong>Current Profile: </strong>
            Daniel.aksdoa@vp.pl
          </div>
          <StyledLogOut>Log out</StyledLogOut>
        </StyledLogOutContainer>
        {portfolioValue ? (
          <>
            <StyledOneStatContainer>
              <div>Transactions profit</div>
              <div>{portfolioValue?.profit.toFixed(2)}</div>
            </StyledOneStatContainer>
            <StyledOneStatContainer>
              <div>Portfolio value</div>
              <div>{portfolioValue?.coinsValue.toFixed(2)}</div>
            </StyledOneStatContainer>
            <StyledOneStatContainer>
              <div>Overwall profit</div>
              <div>
                {(portfolioValue?.profit + portfolioValue?.coinsValue).toFixed(
                  2
                )}
              </div>
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
