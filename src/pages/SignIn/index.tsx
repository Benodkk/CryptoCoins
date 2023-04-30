import { useState } from "react";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../../config/firebase";

import {
  StyledInput,
  StyledSignInContainer,
  StyledSignInForm,
  StyledSignInTitle,
  StyledSubmitForm,
} from "./SingIn.styled";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    setEmail("");
    setPassword("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledSignInContainer>
      <StyledSignInForm>
        <StyledSignInTitle>Sign in</StyledSignInTitle>
        <StyledInput />
        <StyledInput />
        <StyledSubmitForm type="submit" />
      </StyledSignInForm>
      {/* <div>
        <button onClick={signInWithGoogle}>Sign in with Google!</button>
      </div>
      <div>
        <div>Sign in!</div>
        <input
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Sign In</button>
      </div> */}
    </StyledSignInContainer>
  );
};

export default SignIn;
