import { useNavigate } from "react-router";
import { StyledNoTransactions } from "./Profile.styled";

const NoTrasactions = () => {
  const navigate = useNavigate();
  return (
    <StyledNoTransactions onClick={() => navigate("/market/1")}>
      Add your first transaction!
    </StyledNoTransactions>
  );
};

export default NoTrasactions;
