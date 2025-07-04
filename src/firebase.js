import { initializeApp } from "firebase/app";
import  { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu2Z0z-HsH8POh5phx1LDUfIASMpCFFZc",
  authDomain: "netflix-clone-529b1.firebaseapp.com",
  projectId: "netflix-clone-529b1",
  storageBucket: "netflix-clone-529b1.firebasestorage.app",
  messagingSenderId: "391759674504",
  appId: "1:391759674504:web:a69c15eb5bd3ad0f4c733d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"),  {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error) {
        console.log(error);
        alert(error)
    }
}