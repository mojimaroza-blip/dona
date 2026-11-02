// Firebase Console > Project settings > General > Your apps > SDK setup > Config
import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {getAuth} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
const firebaseConfig={apiKey:'PASTE_API_KEY',authDomain:'PASTE_PROJECT_ID.firebaseapp.com',projectId:'PASTE_PROJECT_ID',storageBucket:'PASTE_PROJECT_ID.appspot.com',messagingSenderId:'PASTE_SENDER_ID',appId:'PASTE_APP_ID'};
const app=initializeApp(firebaseConfig);export const auth=getAuth(app);
