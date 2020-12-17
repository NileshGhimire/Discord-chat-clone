import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA4s3FUoJWmyxBh4ckU4jnA2cgMVCf_2bQ",
    authDomain: "discord-chat-fec8f.firebaseapp.com",
    databaseURL: "https://discord-chat-fec8f.firebaseio.com",
    projectId: "discord-chat-fec8f",
    storageBucket: "discord-chat-fec8f.appspot.com",
    messagingSenderId: "100176397587",
    appId: "1:100176397587:web:e16cdf44a41bbfe532c6e6",
    measurementId: "G-DYMGG8LTME"
  };

  const firebaseapp= firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider  };
  export  default db;