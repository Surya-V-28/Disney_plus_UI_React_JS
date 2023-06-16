import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
 
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
// const app = firebaseApp.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage.ref();


export {auth,provider};
export default db;
