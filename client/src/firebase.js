import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCph6NhGtBS63XSEi3P2t-SFz77eH4BoXw",
  authDomain: "twitter-clone-369dc.firebaseapp.com",
  databaseURL: "https://twitter-clone-369dc-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-369dc",
  storageBucket: "twitter-clone-369dc.appspot.com",
  messagingSenderId: "236253592927",
  appId: "1:236253592927:web:4389aa743e3c6a14b94aea",
  measurementId: "G-NW9BQLLN5L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
