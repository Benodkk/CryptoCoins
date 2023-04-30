import { useState } from "react";

import SignIn from "../../pages/SignIn";
import SignUp from "./SignUp";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../config/firebase";

const Auth = () => {
  return (
    <div>
      <>
        <SignIn />
        <div>or</div>
        <SignUp />
      </>
    </div>
  );
};

export default Auth;
