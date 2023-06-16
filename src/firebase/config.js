import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAfplPfGDPG24xKLnSHOpV5DckMRaybJUA",
    authDomain: "pyra-alim-app.firebaseapp.com",
    projectId: "pyra-alim-app",
    storageBucket: "pyra-alim-app.appspot.com",
    messagingSenderId: "836458230189",
    appId: "1:836458230189:web:e339a83242c8c650b2f124"
  };


// init firebase  
initializeApp(firebaseConfig)

// init frestore
const db = getFirestore()

export { db }