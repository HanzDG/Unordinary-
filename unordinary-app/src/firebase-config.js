// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVdhclUzK8phYM5Vrs-r3BZgrHPMIQBTc",
  authDomain: "unordinary-89972.firebaseapp.com",
  projectId: "unordinary-89972",
  storageBucket: "unordinary-89972.firebasestorage.app",
  messagingSenderId: "35892214882",
  appId: "1:35892214882:web:70ac8e44c20f33ab00253b",
  measurementId: "G-7821BCSZY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);;

export { auth };