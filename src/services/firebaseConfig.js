// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPjEbbxS3cNcr64Uc9snA8G8PhDRKZti8",
  authDomain: "olaniyan-omotayo.firebaseapp.com",
  projectId: "olaniyan-omotayo",
  storageBucket: "olaniyan-omotayo.appspot.com",
  messagingSenderId: "826309636444",
  appId: "1:826309636444:web:c37b92b222f228193e5199",
  measurementId: "G-KGJD198BQF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
