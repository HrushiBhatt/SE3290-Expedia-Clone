// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwuE10F-wcvZllqmdL7EKk2VWyZQNvSzg",
  authDomain: "se3290-expedia-clone.firebaseapp.com",
  projectId: "se3290-expedia-clone",
  storageBucket: "se3290-expedia-clone.firebasestorage.app",
  messagingSenderId: "593442878619",
  appId: "1:593442878619:web:722dd0c4442c08b35c823e",
  measurementId: "G-ZWVGD87DJY"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

export default firebase_app