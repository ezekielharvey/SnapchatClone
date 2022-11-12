// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getApps } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDl99e8soMizraK43fzR64a19tIzCC-DpM',
  authDomain: 'snapchatclone-48198.firebaseapp.com',
  projectId: 'snapchatclone-48198',
  storageBucket: 'snapchatclone-48198.appspot.com',
  messagingSenderId: '629215964151',
  appId: '1:629215964151:web:22ce73473eef86aad29cf2',
};

// Initialize Firebase
if (!getApps().length) firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const usersCollection = db.collection('users');
const messageCollection = db.collection('messages');
const friendCollection = db.collection('friends');
const pendingCollection = db.collection('pending');
const addFriendCollection = db.collection('addfriend');

export {
  auth,
  db,
  usersCollection,
  messageCollection,
  friendCollection,
  pendingCollection,
  addFriendCollection
};
