import * as admin from "firebase-admin";
import path from "path";

const serviceAccount = path.resolve(
  __dirname,
  "../../prixgp-a40c8-firebase-adminsdk-nn1ax-5ab05b6da7.json"
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export { admin, db };
