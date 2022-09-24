import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export class CountServices {
  static async getCertificateByParameter(label, value) {
    const db = getFirestore();
    const col = collection(db, "certificate");
    const q = query(col, where(label, "==", value));
    const data = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });

    if (data != null) {
      return data;
    } else {
      return false;
    }
  }

  static async getEventByParameter(label, value) {
    const db = getFirestore();
    const col = collection(db, "event");
    const q = query(col, where(label, "==", value));
    const data = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });

    if (data != null) {
      return data;
    } else {
      return false;
    }
  }
}
