import { useNavigate } from "react-router-dom";

import { StyledButton, StyledButtonsContainer } from "./MarketUpdate.styled";

interface Props {
  pages: number;
  switchPageUrl: string;
  page_nr: number;
}

const SwitchPage = ({ pages, switchPageUrl, page_nr }: Props) => {
  const navigate = useNavigate();

  const createButtons = () => {
    let buttons = [];
    for (let i = 0; i < pages; i++) {
      if (i + 1 > page_nr - 3 && i + 1 < page_nr + 3) {
        buttons.push(
          <StyledButton
            selected={page_nr === i + 1 ? true : false}
            key={i + 1}
            onClick={() => navigate(`${switchPageUrl}/${i + 1}`)}
          >
            {i + 1}
          </StyledButton>
        );
      }
    }
    return buttons;
  };

  return (
    <StyledButtonsContainer show={pages > 1}>
      <StyledButton
        onClick={() =>
          page_nr > 1 ? navigate(`${switchPageUrl}/${page_nr - 1}`) : ""
        }
      >
        {"<"}
      </StyledButton>
      {createButtons()}
      <StyledButton
        onClick={() =>
          page_nr < pages ? navigate(`${switchPageUrl}/${page_nr + 1}`) : ""
        }
      >
        {">"}
      </StyledButton>
    </StyledButtonsContainer>
  );
};

export default SwitchPage;
