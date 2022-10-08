// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
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
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();

export { auth };
