import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAmaYGtumqoQviLlFuvfysON-HJdG9rpDw",
  authDomain: "nareswara-certificate.firebaseapp.com",
  projectId: "nareswara-certificate",
  storageBucket: "nareswara-certificate.appspot.com",
  messagingSenderId: "968431017331",
  appId: "1:968431017331:web:e62d8db007a423afd1f906",
};

const app = initializeApp(firebaseConfig);
export default app;
