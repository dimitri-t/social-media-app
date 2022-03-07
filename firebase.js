// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA99Femw0q0BNGPvgL3tmvybqm-U_lMoIo',
  authDomain: 'social-media-app-463e9.firebaseapp.com',
  projectId: 'social-media-app-463e9',
  storageBucket: 'social-media-app-463e9.appspot.com',
  messagingSenderId: '858466489429',
  appId: '1:858466489429:web:1b52e0e0993906a7e1f0dc',
};

// Initialize Firebase

// Check if there is already an initialized app due to server side rendering
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
