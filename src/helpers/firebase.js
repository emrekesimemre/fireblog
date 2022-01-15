import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC6KoHOryg82nDFVhHplBhNX-BEnyq8PlY',
  authDomain: 'fire-blog-68417.firebaseapp.com',
  databaseURL: 'https://fire-blog-68417-default-rtdb.firebaseio.com',
  projectId: 'fire-blog-68417',
  storageBucket: 'fire-blog-68417.appspot.com',
  messagingSenderId: '318710048736',
  appId: '1:318710048736:web:ad2b0d8ce57336d8946d85',
};

const app = initializeApp(firebaseConfig);
export default app;
const database = getDatabase(app);

export const auth = getAuth(app);
