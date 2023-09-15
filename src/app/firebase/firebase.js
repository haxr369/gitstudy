// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAR4Z10JX8EFb9kJeON1KgGHIfMclDxxgA',
    authDomain: 'gogogosol.firebaseapp.com',
    projectId: 'gogogosol',
    storageBucket: 'gogogosol.appspot.com',
    messagingSenderId: '82510221874',
    appId: '1:82510221874:web:6d75545321e966d9c5e22b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
