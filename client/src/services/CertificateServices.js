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

const db = getFirestore();
const col = collection(db, "certificate");

export class CertificateServices {
  static async getCertificates() {
    const docSnap = await getDocs(col);

    const data = [];

    docSnap.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });

    return data;
  }

  static async getCertificate(id) {
    const result = await getDoc(doc(db, "certificate", id));
    if (result.exists()) {
      return result.data();
    } else {
      return false;
    }
  }

  static async getCertificateByParameter(label, value) {
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

  static async deleteCertificate(id) {
    const docRef = doc(db, "certificate", id);
    const result = await deleteDoc(docRef);

    if (result) {
      return true;
    } else {
      return false;
    }
  }

  static async editCertificate(id, data) {
    return await updateDoc(doc(db, "certificate", id), {
      name: data.name ?? "",
      description: data.description ?? "",
    });
  }

  static async addCertificate(id, data) {
    const result = await setDoc(doc(db, "certificate", id), {
      email: data.email,
      emailAuthor: data.emailAuthor,
      eventName: data.eventName,
      dateCertificate: data.dateCertificate,
      link: data.link,
    });
  }
}
