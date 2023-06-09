import { useState } from "react";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { auth } from "../../config/firebase";
import AuthError from "../../components/AuthError ";

import {
  StyledInput,
  StyledInputOrSpinner,
  StyledSignUp,
  StyledSignUpContainer,
  StyledSignUpForm,
  StyledSignUpTitle,
  StyledSubmitForm,
} from "./SignUp.styled";

const errorMessage = {
  emptyEmail: "Enter Email",
  emptyPassword: "Enter Password",
  shortPassword: "Password has to have at least 6 characters",
  emailExist: "Account with this E-mail already exists",
  wrong: "Try different E-mail or Password",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const signUp = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
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
      let logInError: boolean = false;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error: unknown) {
        console.log(error);
        logInError = true;
        if (error instanceof FirebaseError) {
          if (error.code === "auth/email-already-in-use") {
            setError(errorMessage.emailExist);
          } else {
            setError(errorMessage.wrong);
          }
        }
        setShowError(true);
      } finally {
        if (!logInError) {
          navigate("/profile");
        }
      }
    }
    setLoading(false);
    setEmail("");
    setPassword("");
  };

  return (
    <StyledSignUpContainer>
      <StyledSignUpForm>
        <AuthError
          error={error}
          showError={showError}
          setShowError={setShowError}
        />
        <StyledSignUpTitle>Sign up</StyledSignUpTitle>
        <StyledSignUp>
          <StyledInputOrSpinner>
            {loading ? (
              <BeatLoader color={"rgb(0,6,68)"} />
            ) : (
              <>
                <StyledInput
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                />
                <StyledInput
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                />
              </>
            )}
          </StyledInputOrSpinner>

          <StyledSubmitForm
            type="submit"
            value="Submit"
            onClick={(e) => signUp(e)}
          />
        </StyledSignUp>
      </StyledSignUpForm>
    </StyledSignUpContainer>
  );
};

export default SignUp;
