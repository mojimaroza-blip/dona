
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCgf-C_VovApXBkArweqY222Xthcn3DIM",
  authDomain: "gadona.firebaseapp.com",
  projectId: "gadona",
  storageBucket: "gadona.firebasestorage.app",
  messagingSenderId: "584185189659",
  appId: "1:584185189659:web:5ce2a81687ce8c3fadafbe",
  measurementId: "G-WYY8LMC3VW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
