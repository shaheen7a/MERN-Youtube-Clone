import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2CIqluMuNL6OX76ou0I3St_znLhh5jU0",
  authDomain: "video-app-6d498.firebaseapp.com",
  projectId: "video-app-6d498",
  storageBucket: "video-app-6d498.appspot.com",
  messagingSenderId: "308013598295",
  appId: "1:308013598295:web:0364cf43aaa1c652a64512"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;