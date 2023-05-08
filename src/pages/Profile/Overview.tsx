import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { BeatLoader } from "react-spinners";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

import { PortfolioValue } from "./interfaces";

import {
  StyledLogOut,
  StyledLogOutContainer,
  StyledOneStatContainer,
  StyledOneStatValue,
  StyledOverview,
  StyledOverviewContainer,
  StyledStatsContainer,
} from "./Profile.styled";

interface OverviewProps {
  portfolioValue?: PortfolioValue;
}

const Overview = ({ portfolioValue }: OverviewProps) => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(window.scrollY);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <StyledOverviewContainer>
      <StyledOverview>
        <StyledLogOutContainer scroll={scroll > 30}>
          <div>
            <strong>Current Profile: </strong>
            {auth.currentUser?.email}
          </div>
          <StyledLogOut onClick={logOut}>
            {loading ? <BeatLoader color={"#ffffff"} /> : "Log out"}
          </StyledLogOut>
        </StyledLogOutContainer>
        {portfolioValue ? (
          <StyledStatsContainer>
            <StyledOneStatContainer>
              <div>Transactions profit</div>
              <StyledOneStatValue positive={portfolioValue.profit > 0}>
                {Number(portfolioValue.profit.toFixed(2)).toLocaleString()}$
              </StyledOneStatValue>
            </StyledOneStatContainer>
            <StyledOneStatContainer>
              <div>Portfolio value</div>
              <StyledOneStatValue positive={portfolioValue.coinsValue > 0}>
                {Number(portfolioValue.coinsValue.toFixed(2)).toLocaleString()}$
              </StyledOneStatValue>
            </StyledOneStatContainer>
            <StyledOneStatContainer>
              <div>Overwall profit</div>
              <StyledOneStatValue
                positive={portfolioValue.profit + portfolioValue.coinsValue > 0}
              >
                {Number(
                  (portfolioValue.profit + portfolioValue.coinsValue).toFixed(2)
                ).toLocaleString()}
                $
              </StyledOneStatValue>
            </StyledOneStatContainer>
          </StyledStatsContainer>
        ) : (
          <BeatLoader color={"#ffffff"} />
        )}
      </StyledOverview>
    </StyledOverviewContainer>
  );
};

export default Overview;
