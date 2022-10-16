// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJ-5JlacFLNch88Hmi0BYVJVAxozlHYjI",
    authDomain: "fletlyx.firebaseapp.com",
    projectId: "fletlyx",
    storageBucket: "fletlyx.appspot.com",
    messagingSenderId: "1051104417821",
    appId: "1:1051104417821:web:2d7ef3b88ea33756d64ef4",
    measurementId: "G-01M6G9W0CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);