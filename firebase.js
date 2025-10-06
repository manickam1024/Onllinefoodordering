// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4WfmVKwJyTbzAS7tEkBvDw7cKpqvhO-Y',
  authDomain: 'fooddelivaryapp-43595.firebaseapp.com',
  projectId: 'fooddelivaryapp-43595',
  storageBucket: 'fooddelivaryapp-43595.firebasestorage.app',
  messagingSenderId: '510136751123',
  appId: '1:510136751123:web:834c2a58da5987a418dbe6',
  measurementId: 'G-2CMYGZBET8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
