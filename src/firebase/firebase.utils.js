import firebase from 'firebase/app'; //need for access to firestore and auth
import 'firebase/firestore'; // for the database 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyC5gaK9yBkoXIX7Qi7sx_C6PEZ4DP5hbBU",
    authDomain: "crown-db-iar.firebaseapp.com",
    projectId: "crown-db-iar",
    storageBucket: "crown-db-iar.appspot.com",
    messagingSenderId: "20036987527",
    appId: "1:20036987527:web:de9fd59f2df169b5ede622",
    measurementId: "G-0F5PF9D0ZQ"
  };
  firebase.initializeApp(config);
  //async action since we're calling an API 
  //document reference: crud methods
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //get() is a snapshot of whats in the db
    const snapshot = await userRef.get();

    if(!snapshot.exists){//when users sign up
      const { displayName, email} = userAuth;
      const createdAt = new Date ();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })} catch(error){
          console.log('error creating user', error)
        }
      }
      return userRef;
    }
  

  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //set up google authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;