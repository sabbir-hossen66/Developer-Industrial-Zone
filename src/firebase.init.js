// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE3GNVjPYSVZDLacoQ7RqxDjPRZJZU0y0",
  authDomain: "dev-industrial-zone.firebaseapp.com",
  projectId: "dev-industrial-zone",
  storageBucket: "dev-industrial-zone.appspot.com",
  messagingSenderId: "828205448194",
  appId: "1:828205448194:web:84433844ab722b7e12fb1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

