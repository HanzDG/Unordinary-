import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-config";

const GoogleSignIn = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google Sign-In successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign in with Google</button>;
};

export default GoogleSignIn;
