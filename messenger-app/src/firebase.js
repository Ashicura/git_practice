import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDjIwyJN4gxBEoxlVN0OrzJC9RDEuFsaio",
    authDomain: "chat-app-c30a1.firebaseapp.com",
    projectId: "chat-app-c30a1",
    storageBucket: "chat-app-c30a1.appspot.com",
    messagingSenderId: "679633209521",
    appId: "1:679633209521:web:4ad53a8748f3b28128fa90",
    measurementId: "G-BP1G5DJ689"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app); 

  const auth = getAuth();

  const provider = new GoogleAuthProvider();


 // const app = firebase.initializeApp(firebaseConfig);
 // const db = app.firestore();
 //const auth = firebase.auth();
 // const provider = new firebase.auth.GoogleAuthProvider();

  

  export { auth, provider };
  export default db;