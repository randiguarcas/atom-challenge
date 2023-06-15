import * as admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();

const firebaseCredentials = process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "";

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(firebaseCredentials)),
});

const db = admin.firestore();

export { admin, db };
