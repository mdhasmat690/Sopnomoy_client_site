import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmVNyxL02J-DdPy5AHsU3afmgTRuZJMT8",
  authDomain: "sopnomoy-2603f.firebaseapp.com",
  projectId: "sopnomoy-2603f",
  storageBucket: "sopnomoy-2603f.appspot.com",
  messagingSenderId: "171066974183",
  appId: "1:171066974183:web:1b743b4b45def97524a742",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
