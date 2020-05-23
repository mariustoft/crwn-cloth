import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAWogCjwmfa1ApVR40h-BgsJFriLEKE-Qk",
  authDomain: "crwn-db-31f80.firebaseapp.com",
  databaseURL: "https://crwn-db-31f80.firebaseio.com",
  projectId: "crwn-db-31f80",
  storageBucket: "crwn-db-31f80.appspot.com",
  messagingSenderId: "951735890658",
  appId: "1:951735890658:web:c68c6ca95498537d4d24bb",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
  }
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firestore;
