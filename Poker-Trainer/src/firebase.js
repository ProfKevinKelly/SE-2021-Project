import firebase from "firebase";
import 'firebase/firestore';
import "firebase/functions";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAfhrnhESJEvgVtDj1WwjKKP1Fh2wspqLM",
    authDomain: "poker-trainer-d2a00.firebaseapp.com",
    projectId: "poker-trainer-d2a00",
    storageBucket: "poker-trainer-d2a00.appspot.com",
    messagingSenderId: process.env.VUE_FIREBASE_MESSAGEID,
    appId: process.env.VUE_FIREBASE_APPID
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

if(window.location.hostname === "localhost")
{
    var functions = firebase.functions();
    functions.useEmulator("localhost", 5001);
}

export default firebaseApp
