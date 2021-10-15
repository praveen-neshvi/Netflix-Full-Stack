import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDCV29BL4ZY7xjTpF3VPXsS9yX_POGd_8c",
    authDomain: "netflix-fc65e.firebaseapp.com",
    projectId: "netflix-fc65e",
    storageBucket: "netflix-fc65e.appspot.com",
    messagingSenderId: "822724390391",
    appId: "1:822724390391:web:8c6fecaac39bd31ce792f2",
    measurementId: "G-Y3YDV40WCK"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;