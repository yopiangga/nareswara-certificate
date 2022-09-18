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
const col = collection(db, "event");

export class EventServices {
  static async getEvents() {
    const docSnap = await getDocs(col);

    const data = [];

    docSnap.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });

    return data;
  }

  static async getEvent(label, value) {
    const q = query(col, where(label, "==", value));
    const data = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    if (data[0] != null) {
      return data[0];
    } else {
      return false;
    }
  }

  static async deleteEvent(id) {
    const docRef = doc(db, "event", id);
    const result = await deleteDoc(docRef);

    if (result) {
      return true;
    } else {
      return false;
    }
  }

  static async editEvent(id, data) {
    return await updateDoc(doc(db, "event", id), {
      name: data.name ?? "",
      description: data.description ?? "",
    });
  }

  static async addEvent(id, data, listName) {
    const result = await setDoc(doc(db, "event", id), {
      eventName: data.eventName,
      eventDescription: data.eventDescription,
      noCertificateStatic: data.noCertificateStatic,
      noCertificateStart: data.noCertificateStart,
      titleCertificate: data.titleCertificate,
      authorCertificate: data.authorCertificate,
      dateCertificate: data.dateCertificate,
      descriptionCertificate: data.descriptionCertificate,
      certificates: listName,
    });
  }
}
