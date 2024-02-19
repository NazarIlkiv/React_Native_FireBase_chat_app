// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  connectAuthEmulator,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getFirestore,
  collection,
  connectFirestoreEmulator,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesі

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmeWe425BvDcYPd9dSS2C7MYpsWuCuwCI",
  authDomain: "fir-chat-aefc3.firebaseapp.com",
  projectId: "fir-chat-aefc3",
  storageBucket: "fir-chat-aefc3.appspot.com",
  messagingSenderId: "332531667593",
  appId: "1:332531667593:web:f7d518e349ad0d38202c58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// логіка така, що якщо ми ребутнемо мобільний додаток, то ми не втратимо дані для входу - адже вони збережені в AsyncStorage

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// connectAuthEmulator(auth, `http://10.0.2.2:9099`);

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
