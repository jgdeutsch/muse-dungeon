import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAazSh6JRMmLlY9zelcvCP3AXJNhq5UXoE",
  authDomain: "muse-dungeon.firebaseapp.com",
  projectId: "muse-dungeon",
  storageBucket: "muse-dungeon.firebasestorage.app",
  messagingSenderId: "137134154897",
  appId: "1:137134154897:web:58d5d8fbfa53b51c94cb30",
  measurementId: "G-KBLT0L1ML0",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
