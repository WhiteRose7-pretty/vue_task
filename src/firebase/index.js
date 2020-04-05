/**
 * Firebase Login
 * Vuely comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase 
const config = {

    apiKey: "AIzaSyB5j6p5AeZdeR7sFI2bokmWWPF4FOZ9i1E",
    authDomain: "flyerdistributionapp.firebaseapp.com",
    databaseURL: "https://flyerdistributionapp.firebaseio.com",
    projectId: "flyerdistributionapp",
    storageBucket: "flyerdistributionapp.appspot.com",
    messagingSenderId: "815891860432",
    appId: "1:815891860432:web:0b8b28d5b6fb10055887d5"
};


console.log('firebase initialize!');
firebase.initializeApp(config);
console.log(firebase);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const database = firebase.database();

export {
    auth,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    database,
    firebase
};