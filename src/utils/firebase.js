import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyABg265GZXoXGziI7VbMm_SsPT3zJ_syNI",
  authDomain: "yuliacapstone.firebaseapp.com",
  projectId: "yuliacapstone",
  storageBucket: "yuliacapstone.appspot.com",
  messagingSenderId: "79249118421",
  appId: "1:79249118421:web:68288a1cf89de26664fe5c",
  measurementId: "G-7970H4F1F7"
};
 

firebase.initializeApp(firebaseConfig);
firebase.auth(); 
 

export const db = firebase.firestore();
export const restaurantsCollection = db.collection('restaurants');
export const usersCollection = db.collection('users')
export default firebase;
