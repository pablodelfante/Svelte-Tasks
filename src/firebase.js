import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAiqVce28gTNdsN82qlqpg93gLfJIYj3D4",
    authDomain: "svelte-tasks.firebaseapp.com",
    projectId: "svelte-tasks",
    storageBucket: "svelte-tasks.appspot.com",
    messagingSenderId: "221073973044",
    appId: "1:221073973044:web:d8ff530c96ae3b10a48f61"
}


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;