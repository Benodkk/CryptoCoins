import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../config/firebase";
import Error from "../../components/Error";

import {
  StyledInput,
  StyledSignUp,
  StyledSignUpContainer,
  StyledSignUpForm,
  StyledSignUpTitle,
  StyledSubmitForm,
} from "./SignUp.styled";
import { useNavigate } from "react-router";

const errorMessage = {
  emptyEmail: "Enter Email",
  emptyPassword: "Enter Password",
  shortPassword: "Password has to have at least 6 characters",
  wrong: "Try different E-mail or Password",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  const signUp = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();

    if (email.length === 0) {
      setError(errorMessage.emptyEmail);
      setShowError(true);
    } else if (password.length === 0) {
      setError(errorMessage.emptyPassword);
      setShowError(true);
    } else if (password.length < 6) {
      setError(errorMessage.shortPassword);
      setShowError(true);
    } else {
      let logInError: null | string = null;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        logInError = errorMessage.wrong;
        setError(errorMessage.wrong);
        setShowError(true);
        console.log(err);
      } finally {
        if (!logInError) {
          navigate("/profile");
        }
      }
    }
  };

  return (
    <StyledSignUpContainer>
      <StyledSignUpForm>
        <Error
          error={error}
          showError={showError}
          setShowError={setShowError}
        />
        <StyledSignUpTitle>Sign up</StyledSignUpTitle>
        <StyledSignUp>
          <StyledInput
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <StyledInput
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledSubmitForm type="submit" onClick={(e) => signUp(e)} />
        </StyledSignUp>
      </StyledSignUpForm>
    </StyledSignUpContainer>
  );
};

export default SignUp;
