import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";

import googleIcon from "../../assets/google.png";

import AuthError from "../../components/AuthError ";

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
  StyledInputOrSpinner,
} from "./SingIn.styled";

const errorMessage = {
  emptyEmail: "Enter E-mail",
  emptyPassword: "Enter Password",
  wrong: "Wrong E-mail or Password",
};

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    if (email.length === 0) {
      setError(errorMessage.emptyEmail);
      setShowError(true);
    } else if (password.length === 0) {
      setError(errorMessage.emptyPassword);
      setShowError(true);
    } else {
      let logInError: null | string = null;
      try {
        await signInWithEmailAndPassword(auth, email, password);
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
    setLoading(false);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    } finally {
      if (auth) {
        navigate("/profile");
      }
    }
  };

  return (
    <StyledSignInContainer>
      <StyledSignInForm>
        <AuthError
          error={error}
          showError={showError}
          setShowError={setShowError}
        />
        <StyledSignInTitle>Sign in</StyledSignInTitle>
        <StyledSignIn>
          <StyledInputOrSpinner>
            {loading ? (
              <BeatLoader color={"rgb(0,6,68)"} />
            ) : (
              <>
                <StyledInput
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <StyledInput
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </>
            )}
          </StyledInputOrSpinner>
          <StyledSubmitForm type="submit" onClick={(e) => signIn(e)} />
          <div>Or login with</div>
          <StyledWithGoogle onClick={signInWithGoogle}>
            <img src={googleIcon} alt="google" />
            <div>Google</div>
          </StyledWithGoogle>
        </StyledSignIn>
        <StyledSignUp>
          <div>Don't have account?</div>
          <StyledSignUpNavigate onClick={() => navigate("/sign_up")}>
            Sign up!
          </StyledSignUpNavigate>
        </StyledSignUp>
      </StyledSignInForm>
    </StyledSignInContainer>
  );
};

export default SignIn;
