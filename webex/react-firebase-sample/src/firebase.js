// 必要な関数を import
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlj-uk0MlvZLtcxmXBJPwnIfsQnML16k0",
  authDomain: "comment-box-c1226.firebaseapp.com",
  projectId: "comment-box-c1226",
  storageBucket: "comment-box-c1226.appspot.com",
  messagingSenderId: "398670911840",
  appId: "1:398670911840:web:8816da5fd70772b92b6605",
  measurementId: "G-T176BN0MWL",
};
// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig);
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app);
