// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3y5lOpv9_TfPstA5UYmEMdh0lCwQtqWY",
    authDomain: "portfoilo-443.firebaseapp.com",
    projectId: "portfoilo-443",
    storageBucket: "portfoilo-443.appspot.com",
    messagingSenderId: "186425880880",
    appId: "1:186425880880:web:9c277333e93c73c861d8f5",
    measurementId: "G-C6L95ZVYZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)
const storage = getStorage(app)

export { analytics, firestore, storage }