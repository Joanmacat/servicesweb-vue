import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzgDB1WTsxXP8TxFaDyhUoRkBfJGdC5hY",
  authDomain: "servicesweb-vue3.firebaseapp.com",
  projectId: "servicesweb-vue3",
  storageBucket: "servicesweb-vue3.appspot.com",
  messagingSenderId: "576591719346",
  appId: "1:576591719346:web:f676c76c7d495e3d10d2ab",
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
