
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVW8Nv-Firvcvhu_RzhKL0S0QWl73XNug",
  authDomain: "app-santiago-c17db.firebaseapp.com",
  projectId: "app-santiago-c17db",
  storageBucket: "app-santiago-c17db.firebasestorage.app",
  messagingSenderId: "587676999834",
  appId: "1:587676999834:web:fa3cd494b0cc27a386ff23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportar esa instancia (db) de firebase
export const db = getFirestore(app)