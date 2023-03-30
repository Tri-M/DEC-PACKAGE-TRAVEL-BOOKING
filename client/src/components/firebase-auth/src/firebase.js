import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6HW-PiWtalXmpAczLeUh2hOGqaDAmuNI",
  authDomain: "decpackage-fc455.firebaseapp.com",
  projectId: "decpackage-fc455",
  storageBucket: "decpackage-fc455.appspot.com",
  messagingSenderId: "358522881071",
  appId: "1:358522881071:web:0002a70039ad605dbd72da",
  measurementId: "G-5QC660D8E7"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const storage=getStorage(app);
export { app, auth };
