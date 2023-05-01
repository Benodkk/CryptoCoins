import React from "react";

import {
  StyledCloseBtn,
  StyledError,
  StyledErrorContainer,
} from "./Error.styled";

interface ErrorProps {
  error: string | null;
  showError: boolean;
  setShowError: (showErrors: boolean) => void;
}

const Error = ({ error, showError, setShowError }: ErrorProps) => {
  return (
    <StyledErrorContainer visible={showError}>
      <StyledError>{error}</StyledError>
      <StyledCloseBtn onClick={() => setShowError(false)}>X</StyledCloseBtn>
    </StyledErrorContainer>
  );
};

export default Error;
