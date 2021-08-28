import firebase from "firebase/app";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDhtkVdKs2oC1SXIoZFrUQB1kjb5D66Cs0",
    authDomain: "fir-auth-91aad.firebaseapp.com",
    projectId: "fir-auth-91aad",
    storageBucket: "fir-auth-91aad.appspot.com",
    messagingSenderId: "833774121768",
    appId: "1:833774121768:web:c10564dea6fe5c0483961d",
    measurementId: "G-09RP1XGTEH"
  };
const fireb = firebase.initializeApp(firebaseConfig);
const store = fireb.firestore();
export {store}