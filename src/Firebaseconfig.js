import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAo0BsTj9Cu-IOVWF_DLlNwlaCA36r73bs",
    authDomain: "basketdayo-3a047.firebaseapp.com",
    projectId: "basketdayo-3a047",
    storageBucket: "basketdayo-3a047.appspot.com",
    messagingSenderId: "1024636462947",
    appId: "1:1024636462947:web:17c0a3a04b398d9be79556"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyAC1wBAxY2f85S8QZfv-ei7AlbhGFXb-fE",
//   authDomain: "basketdayov2.firebaseapp.com",
//   projectId: "basketdayov2",
//   storageBucket: "basketdayov2.firebasestorage.app",
//   messagingSenderId: "901401910725",
//   appId: "1:901401910725:web:4b31194f0f5e763cda7fac"
// };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app)
  export { auth,db};
   
 
 