// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJLgwUnrMomt8tRlJO59BGtJb0RSt3KUo",
    authDomain: "cookie-and-kate-recipe.firebaseapp.com",
    projectId: "cookie-and-kate-recipe",
    storageBucket: "cookie-and-kate-recipe.appspot.com",
    messagingSenderId: "887366031101",
    appId: "1:887366031101:web:970d27237ad2791741d094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;