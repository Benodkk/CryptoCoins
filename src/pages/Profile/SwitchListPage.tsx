import {
  StyledSwitchButtonsContainer,
  StyledSwitchButton,
} from "./Profile.styled";

interface Props {
  pages: number;
  page_nr: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SwitchListPage = ({ pages, page_nr, setPage }: Props) => {
  const createButtons = () => {
    let buttons = [];
    for (let i = 0; i < pages; i++) {
      if (i + 1 > page_nr - 3 && i + 1 < page_nr + 3) {
        buttons.push(
          <StyledSwitchButton
            selected={page_nr === i + 1 ? true : false}
            key={i + 1}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </StyledSwitchButton>
        );
      }
    }
    return buttons;
  };

  return (
    <StyledSwitchButtonsContainer show={pages > 1}>
      <StyledSwitchButton
        onClick={() => (page_nr > 1 ? setPage(page_nr - 1) : "")}
      >
        {"<"}
      </StyledSwitchButton>
      {createButtons()}
      <StyledSwitchButton
        onClick={() => (page_nr < pages ? setPage(page_nr + 1) : "")}
      >
        {">"}
      </StyledSwitchButton>
    </StyledSwitchButtonsContainer>
  );
};

export default SwitchListPage;
