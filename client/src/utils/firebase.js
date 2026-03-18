
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "notes-application-3e5e2.firebaseapp.com",
  projectId: "notes-application-3e5e2",
  storageBucket: "notes-application-3e5e2.firebasestorage.app",
  messagingSenderId: "837092341286",
  appId: "1:837092341286:web:4de9930120e89ca2d798e7",
  measurementId: "G-S1RYK17ZGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);  

const provider  = new GoogleAuthProvider();   

export {auth , provider};      
