// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD0yBvWHwr_NO5-CRaZK4jPk2x_dMVd7TM",
  authDomain: "first-pwa-5b5e2.firebaseapp.com",
  projectId: "first-pwa-5b5e2",
  storageBucket: "first-pwa-5b5e2.appspot.com",
  messagingSenderId: "482286724458",
  appId: "1:482286724458:web:543e9f2ed0ce49f5ab3113"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



// HABILITA PERSISTENCIA EN FIREBASE
db.enablePersistence().catch(err => {
  if (err.code == 'failed-precondition') {
    console.log('multiple tabs opened')
  } else if (err.code == 'unimplemented') {
    console.log('browser not support')
  }
})

// INICIA SESIÓN ANÓNIMA EN FIREBASE
firebase.auth().signInAnonymously()
  .then(() => {
    // console.log('sign in')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('err on sign in')
  });

export default db;