import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX390hYMr6c93QpVW1TkE4yIGFqEOWmCc",
  authDomain: "osvit-marko",
  databaseURL: "https://osvit-marko.firebaseio.com",
  storageBucket: "gs://osvit-marko.appspot.com",
  projectId: "osvit-marko"
};

firebase.initializeApp(firebaseConfig);

const firebaseWithConfig = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const FirebaseAuth = firebaseWithConfig.auth();
export const FirebaseDatabase = firebaseWithConfig.firestore();
