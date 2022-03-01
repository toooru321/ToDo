import { initializeApp } from "firebase/App";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDdKdGqe9PG--XZw7oAIbWf42M900W9Fc",
  authDomain: "plactice-29741.firebaseapp.com",
  projectId: "plactice-29741",
  storageBucket: "plactice-29741.appspot.com",
  messagingSenderId: "831240229561",
  appId: "1:831240229561:web:cc24f597e854951e9bc168",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
