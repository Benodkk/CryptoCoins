import { StyledTabsContainer, StyledTabButton } from "./Profile.styled";

interface Props {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs = ({ selectedTab, setSelectedTab }: Props) => {
  return (
    <StyledTabsContainer>
      <StyledTabButton
        onClick={() => setSelectedTab("coins")}
        active={selectedTab === "coins"}
      >
        Coins Overview
      </StyledTabButton>
      <StyledTabButton
        active={selectedTab === "transactions"}
        onClick={() => setSelectedTab("transactions")}
      >
        Transactions History
      </StyledTabButton>
    </StyledTabsContainer>
  );
};

export default Tabs;
