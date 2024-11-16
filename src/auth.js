import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "./firebaseConfig"; // Corrected casing

const auth = getAuth(firebaseApp);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };
