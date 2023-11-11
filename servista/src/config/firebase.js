import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCwu_9aTnr0QIbfB8blfTePH1QzYW5hnEg",
    authDomain: "fir-3f757.firebaseapp.com",
    projectId: "fir-3f757",
    storageBucket: "fir-3f757.appspot.com",
    messagingSenderId: "776552502302",
    appId: "1:776552502302:web:2ef37dc0835ae4c3774a0f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);