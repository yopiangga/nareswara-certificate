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
const col = collection(db, "request");

export class RequestServices {
  static async getRequests() {
    const docSnap = await getDocs(col);

    const data = [];

    docSnap.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });

    return data;
  }

  static async getRequest(id) {
    const result = await getDoc(doc(db, "request", id));
    if (result.exists()) {
      return result.data();
    } else {
      return false;
    }
  }

  static async getRequestByParameter(label, value) {
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

  static async deleteRequest(id) {
    const docRef = doc(db, "request", id);
    const result = await deleteDoc(docRef);

    if (result) {
      return true;
    } else {
      return false;
    }
  }

  static async editRequest(id, data) {
    return await updateDoc(doc(db, "request", id), {
      name: data.name ?? "",
      description: data.description ?? "",
    });
  }

  static async addRequest(id, data) {
    const result = await setDoc(doc(db, "request", id), {
      metaId: data.metaId,
      email: data.email,
      eventId: data.eventId,
      status: data.status,
      createdAt: data.createdAt,
    });

    return result;
  }
}
