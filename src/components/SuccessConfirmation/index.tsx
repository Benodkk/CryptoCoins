import {
  StyledAnimationContainer,
  StyledCheckmarkCheck,
  StyledCheckmarkCircle,
  StyledSVG,
  StyledTransactionConfirmation,
} from "./SuccessConfirmation.styled";

interface Props {
  message: string;
}

const SuccessAnimation = ({ message }: Props) => {
  return (
    <StyledAnimationContainer>
      <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <StyledCheckmarkCircle cx="26" cy="26" r="25" fill="none" />
        <StyledCheckmarkCheck fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </StyledSVG>
      <StyledTransactionConfirmation>{message}</StyledTransactionConfirmation>
    </StyledAnimationContainer>
  );
};

export default SuccessAnimation;
