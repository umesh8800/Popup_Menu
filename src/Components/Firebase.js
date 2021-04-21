import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3Gvia9A1HBdhH0s9lVMzmv2KtGR3u8Og",
    authDomain: "projects-39783.firebaseapp.com",
    projectId: "projects-39783",
    storageBucket: "projects-39783.appspot.com",
    messagingSenderId: "455525650456",
    appId: "1:455525650456:web:0853dc2f114e558003f36d",
    measurementId: "G-FENKHXXFXJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db;