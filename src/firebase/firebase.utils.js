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

export const auth = app.auth();
export const firestore = app.firestore();

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData,
      });
    } catch (error) {
      console.log("Error creating user" + error.name);
    }
  }
  return userRef;
};

const provider = new app.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firestore;
