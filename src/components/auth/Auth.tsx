import { useState } from "react";

import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SignUp from "./SignUp";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../config/firebase";

const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
  });

  return (
    <div>
      {isLogIn ? (
        <SignOut />
      ) : (
        <>
          <SignIn />
          <div>or</div>
          <SignUp />
        </>
      )}
    </div>
  );
};

export default Auth;
