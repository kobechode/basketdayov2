import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAo0BsTj9Cu-IOVWF_DLlNwlaCA36r73bs",
    authDomain: "basketdayo-3a047.firebaseapp.com",
    projectId: "basketdayo-3a047",
    storageBucket: "basketdayo-3a047.appspot.com",
    messagingSenderId: "1024636462947",
    appId: "1:1024636462947:web:17c0a3a04b398d9be79556"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export { auth };