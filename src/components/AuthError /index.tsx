import CloseButton from "../CloseButton";

import { StyledCloseBtn, StyledErrorContainer } from "./AuthError.styled";

interface Props {
  error: string | null;
  showError: boolean;
  setShowError: (showErrors: boolean) => void;
}

const AuthError = ({ error, showError, setShowError }: Props) => {
  return (
    <StyledErrorContainer visible={showError}>
      <div>{error}</div>
      <StyledCloseBtn>
        <CloseButton onClick={() => setShowError(false)} color="black" />
      </StyledCloseBtn>
    </StyledErrorContainer>
  );
};

export default AuthError;
