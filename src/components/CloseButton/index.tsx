import close from "../../assets/close.png";
import closeBlack from "../../assets/close-black.png";

import { StyledCloseButton } from "./CloseButton.styled";

interface Props {
  onClick: React.MouseEventHandler<HTMLImageElement>;
  color?: string;
}

const CloseButton = ({ onClick, color }: Props) => {
  return (
    <StyledCloseButton
      onClick={onClick}
      src={color === "black" ? closeBlack : close}
    />
  );
};

export default CloseButton;
