
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    getAuth, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDN2xz1ykxvLBRXcD7tmXV-1xpt6bhJsb8",
  authDomain: "coffee-atlas-7f209.firebaseapp.com",
  projectId: "coffee-atlas-7f209",
  storageBucket: "coffee-atlas-7f209.firebasestorage.app",
  messagingSenderId: "766008213206",
  appId: "1:766008213206:web:e83cd17521033790041377"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
//function for signUp
const signUp = async(name, email, password)=>{
    try{
        //creating this deatial about the user
       const res =  await createUserWithEmailAndPassword(auth, email, password);
       //storing the data about the user in this user variable
       const user = res.user;
      //adding the database
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
       })
    }catch(error){

        console.log(error);
        alert(error);


    }
}
//function for login 
const login = async(email, password)=>{
    try{
         await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error);
        alert(error);
    }
}
// function for logout 
const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signUp, logout};