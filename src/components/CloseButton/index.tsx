import { StyledCloseButton } from "./CloseButton.styled";
import close from "../../assets/close.png";

interface Props {
  onClick: any;
}

const CloseButton = ({ onClick }: Props) => {
  return <StyledCloseButton onClick={onClick} src={close} />;
};

export default CloseButton;
