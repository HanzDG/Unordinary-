import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import GoogleSignIn from "./GoogleSignIn";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email || "User"}!</h2>
          <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
      ) : (
        <div>
          <SignUp />
          <SignIn />
          <GoogleSignIn />
        </div>
      )}
    </div>
  );
};

export default App;
