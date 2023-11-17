// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFwzXkqsbDvXK8wJrc3Rk888O89NWECx0",
  authDomain: "nolann-corp.firebaseapp.com",
  projectId: "nolann-corp",
  storageBucket: "nolann-corp.appspot.com",
  messagingSenderId: "586142013430",
  appId: "1:586142013430:web:d8ef895d5c2a5f5e2919d7",
  measurementId: "G-PTG9M7DN8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);