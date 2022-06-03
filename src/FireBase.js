// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDXc6SErddxrUMuhn4HABFSemM0IHcjfZs',
  authDomain: 'apirestreact.firebaseapp.com',
  projectId: 'apirestreact',
  storageBucket: 'apirestreact.appspot.com',
  messagingSenderId: '1028671015675',
  appId: '1:1028671015675:web:18d69bb056df0882e83e5e',
  measurementId: 'G-CWVZ4E2NS9',
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
