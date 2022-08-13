// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// import env from "react-native-dotenv";
// import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from "";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAvw06lm5YRiJlZ_2A-HQfac4yGkfigKpw",
  authDomain: "acountauth.firebaseapp.com",
  projectId: "acountauth",
  storageBucket: "acountauth.appspot.com",
  messagingSenderId: "1082737921727",
  appId: "1:1082737921727:web:bf07371c84526da00c000a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
