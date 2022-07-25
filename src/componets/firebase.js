import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDIn8gpgu0XueI1rXTpyspikvIt2kJSK7M",
  authDomain: "whatsapp-3f1d8.firebaseapp.com",
  databaseURL: "https://whatsapp-3f1d8-default-rtdb.firebaseio.com",
  projectId: "whatsapp-3f1d8",
  storageBucket: "whatsapp-3f1d8.appspot.com",
  messagingSenderId: "74010948707",
  appId: "1:74010948707:web:ff772c7aa2425e3cd73456",
  measurementId: "G-324270TCWK"
};

// Initialize Firebase
const firebaseApp  = firebase.initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const auth = firebase.auth()
const db = firebaseApp.firestore()
export {auth , db ,storage}
export const createUserCollecton =async(user,additionalData)=>{
  if(!user) return;
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists){
    const {email} = user;
    const {displayName} = additionalData;
    const {number} = additionalData;
    const {birth} = additionalData;
    const {gender} = additionalData;
    const {profile} = additionalData;

    try{
      userRef.set({
        email,
        displayName,
        profile,
        birth,
        number,
        createdAt :new Date(),
        gender,
        isOnline:true,
        uid:user.uid,
      })
    }
    catch(err){
      console.log(err);
    }
  }
}
