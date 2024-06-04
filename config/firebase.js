import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyAH4RuiDrtAd9edxW0ll3eEQBVaG4zT57g',
  authDomain: 'expensify-c17aa.firebaseapp.com',
  projectId: 'expensify-c17aa',
  storageBucket: 'expensify-c17aa.appspot.com',
  messagingSenderId: '546222249780',
  appId: '1:546222249780:web:875c20cc9ecd1db4ceb761',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;