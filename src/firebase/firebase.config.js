// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8UjFxA15PULaHu1Dn1ePYKkGUYEQlsZY",
  authDomain: "task-management-platform-b52bd.firebaseapp.com",
  projectId: "task-management-platform-b52bd",
  storageBucket: "task-management-platform-b52bd.appspot.com",
  messagingSenderId: "735855613936",
  appId: "1:735855613936:web:968142ecb1942fa623ef35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;