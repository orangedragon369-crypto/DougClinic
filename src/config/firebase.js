// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCikc_whgyiVXxDquK_YEeHTnYp5qzLDwA",
    authDomain: "ludington-primary-care.firebaseapp.com",
    projectId: "ludington-primary-care",
    storageBucket: "ludington-primary-care.firebasestorage.app",
    messagingSenderId: "137263504042",
    appId: "1:137263504042:web:19511116f064580e854ed3",
    measurementId: "G-TYPXDNVRLR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;