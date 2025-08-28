
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwbIHTMWM_AQ-NIsdXGDzAfoC8Tf8lZiY",
  authDomain: "study-discussion-club.firebaseapp.com",
  projectId: "study-discussion-club",
  storageBucket: "study-discussion-club.appspot.com",
  messagingSenderId: "383378613377",
  appId: "1:383378613377:web:xxxxxxxxxxxx"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Logout function
export const logout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default app;
