// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbOBuPLtDaxufiRBzojOg8DYA9ztHCqP4",
  authDomain: "the-mentor-test.firebaseapp.com",
  projectId: "the-mentor-test",
  storageBucket: "the-mentor-test.appspot.com",
  messagingSenderId: "119544650360",
  appId: "1:119544650360:web:dc9a52089b6f9212c5eb8d",
  measurementId: "G-HY63MBY70R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };