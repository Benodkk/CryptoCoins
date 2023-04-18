import { signOut } from "firebase/auth";

import { auth } from "../../config/firebase";

const SignOut = () => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={logout}>Log out!</button>
    </div>
  );
};

export default SignOut;
