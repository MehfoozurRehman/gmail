import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLdUC7idY08PcHdpNsGRsxok22dQHSOyo",
  authDomain: "clone-68669.firebaseapp.com",
  projectId: "clone-68669",
  storageBucket: "clone-68669.appspot.com",
  messagingSenderId: "990086068984",
  appId: "1:990086068984:web:2f86a4c154d1871126190d",
  measurementId: "G-P7WH0Z8R8Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
