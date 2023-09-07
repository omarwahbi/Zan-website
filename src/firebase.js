// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8qtGp-uc9M702DBkIsKmdV8jIl_j3sow",
  authDomain: "zan-doors.firebaseapp.com",
  databaseURL: "https://zan-doors-default-rtdb.firebaseio.com",
  projectId: "zan-doors",
  storageBucket: "zan-doors.appspot.com",
  messagingSenderId: "987341077568",
  appId: "1:987341077568:web:33b57f839696204b0673a5",
  measurementId: "G-34ZSST4PR0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
