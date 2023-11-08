import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDzVwosM3K4QAAl9mCLzikKimOoGUEL49Y",
  authDomain: "testreact-cbe8a.firebaseapp.com",
  databaseURL: "https://testreact-cbe8a-default-rtdb.firebaseio.com",
  projectId: "testreact-cbe8a",
  storageBucket: "testreact-cbe8a.appspot.com",
  messagingSenderId: "999270165",
  appId: "1:999270165:web:ad04a4d71f01bd2ed4ab1c",
  measurementId: "G-9S48RH2RC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);