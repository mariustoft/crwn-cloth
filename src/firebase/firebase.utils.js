import "firebase/firestore";
import "firebase/auth";

import app from "firebase/app";

app.initializeApp({
  apiKey: "AIzaSyAWogCjwmfa1ApVR40h-BgsJFriLEKE-Qk",
  authDomain: "crwn-db-31f80.firebaseapp.com",
  databaseURL: "https://crwn-db-31f80.firebaseio.com",
  projectId: "crwn-db-31f80",
  storageBucket: "crwn-db-31f80.appspot.com",
  messagingSenderId: "951735890658",
  appId: "1:951735890658:web:c68c6ca95498537d4d24bb",
});

let provider = new app.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firestore = app.firestore();
export const auth = app.auth();
