import { useState } from "react";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../../config/firebase";
import googleIcon from "../../assets/google.png";
import Error from "../../components/Error";

import {
  StyledInput,
  StyledSignUp,
  StyledSignIn,
  StyledSignInContainer,
  StyledSignInForm,
  StyledSignInTitle,
  StyledSubmitForm,
  StyledWithGoogle,
  StyledSignUpNavigate,
} from "./SingIn.styled";
import { useNavigate } from "react-router";

const errorTypes = {
  emptyEmail: "Enter Email",
  emptyPassword: "Enter Password",
  wrong: "Wrong E-mail or Password",
};

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  const signIn = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();

    if (email.length === 0) {
      setError(errorTypes.emptyEmail);
      setShowError(true);
    } else if (password.length === 0) {
      setError(errorTypes.emptyPassword);
      setShowError(true);
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setError(errorTypes.wrong);
        setShowError(true);
        console.log(err);
      } finally {
        if (!error) {
          navigate("/");
        }
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    } finally {
      if (auth) {
        navigate("/");
      }
    }
  };

  return (
    <StyledSignInContainer>
      <StyledSignInForm>
        <StyledSignInTitle>Sign in</StyledSignInTitle>
        <StyledSignIn>
          <StyledInput
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledSubmitForm type="submit" onClick={(e) => signIn(e)} />
          <div>Or login with</div>
          <StyledWithGoogle onClick={signInWithGoogle}>
            <img src={googleIcon} alt="google" />
            <div>Google</div>
          </StyledWithGoogle>
          <Error
            error={error}
            showError={showError}
            setShowError={setShowError}
          />
        </StyledSignIn>
        <StyledSignUp>
          <div>Don't have account?</div>
          <StyledSignUpNavigate>Sign up!</StyledSignUpNavigate>
        </StyledSignUp>
      </StyledSignInForm>
    </StyledSignInContainer>
  );
};

export default SignIn;
