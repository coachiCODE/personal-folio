import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD9vnUrW0aa0mT007FSoilj7N3L3dBL5dI",
    authDomain: "personal-folio-9751c.firebaseapp.com",
    projectId: "personal-folio-9751c",
    storageBucket: "personal-folio-9751c.appspot.com",
    messagingSenderId: "399049573292",
    appId: "1:399049573292:web:eebed8ceff7c41b236b009",
    measurementId: "G-MGJSPF3RF9"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;