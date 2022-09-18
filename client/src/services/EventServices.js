import {
  getFirestore,
  getDoc,
  doc,
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
      created_at: created_at ?? "",
    });
  }
}
