import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0vcXH7X3dXpudK-cYKJa0p07vr8xAVwQ',
  authDomain: 'react-apps-880eb.firebaseapp.com',
  projectId: 'react-apps-880eb',
  storageBucket: 'react-apps-880eb.firebasestorage.app',
  messagingSenderId: '1000753932643',
  appId: '1:1000753932643:web:7386382cd774b465724b56',
  measurementId: 'G-T4ZGEX8CHR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
