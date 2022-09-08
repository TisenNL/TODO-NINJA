import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfjFFGXG2TfjGyM8Ww1IUT3e6G4iIuNEE",
  authDomain: "todo-ninja-12532.firebaseapp.com",
  projectId: "todo-ninja-12532",
  storageBucket: "todo-ninja-12532.appspot.com",
  messagingSenderId: "1009607646964",
  appId: "1:1009607646964:web:fe8ca69f46739589c1c8a1",
  measurementId: "G-7G1GHWVT4G"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;

