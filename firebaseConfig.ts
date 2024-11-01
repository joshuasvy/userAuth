import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRd23g4jcozSk7dEsGVauuMQVpflVXpus",
  authDomain: "userauth-a8539.firebaseapp.com",
  projectId: "userauth-a8539",
  storageBucket: "userauth-a8539.appspot.com",
  messagingSenderId: "725349285110",
  appId: "1:725349285110:web:d6bd39f8ee57fb2758c0d7",
  measurementId: "G-VE8EY9WYY8"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
