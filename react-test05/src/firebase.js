import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBDuX6YWHlQjW-DfwRlxl7n99Ut4vp6IJ4",
  authDomain: "todo-app-bbfbb.firebaseapp.com",
  databaseURL: "https://todo-app-bbfbb-default-rtdb.firebaseio.com",
  projectId: "todo-app-bbfbb",
  storageBucket: "todo-app-bbfbb.firebasestorage.app",
  messagingSenderId: "608259770071",
  appId: "1:608259770071:web:b170d4dcaa362168c4d292",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
