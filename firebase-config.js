// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCgf-C_VovApXBkArweqY222Xthcn3DIM",
  authDomain: "gadona.firebaseapp.com",
  projectId: "gadona",
  storageBucket: "gadona.firebasestorage.app",
  messagingSenderId: "584185189659",
  appId: "1:584185189659:web:5ce2a81687ce8c3fadafbe",
  measurementId: "G-WYY8LMC3VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
