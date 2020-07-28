import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBBwj4qAzWYrqbbC3NZreX9j5MGCIv9GxU",
  authDomain: "geo-nijas.firebaseapp.com",
  databaseURL: "https://geo-nijas.firebaseio.com",
  projectId: "geo-nijas",
  storageBucket: "geo-nijas.appspot.com",
  messagingSenderId: "381391646222",
  appId: "1:381391646222:web:b11060f8e59896c9fad65f"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
