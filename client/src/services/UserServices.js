import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore();
const col = collection(db, "user");

export class UserServices {

  static async addUsers(uid, email, name, address, metaId, role, photoPath) {
    await setDoc(doc(db, "user", uid), {
      email: email,
      name: name,
      address: address,
      metaId: metaId,
      role: parseInt(role),
      photoPath: photoPath
    });
  }

  static async getUsers() {
    const docSnap = await getDocs(col);

    const data = [];

    docSnap.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });

    return data;
  }

  static async getUser(label, value) {
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

  static async deleteUser(id) {
    const docRef = doc(db, "user", id);
    const result = await deleteDoc(docRef);

    if (result) {
      return true;
    } else {
      return false;
    }
  }

  static async editUser(id, data) {
    return await updateDoc(doc(db, "user", id), {
      name: data.name ?? "",
      photo: data.photo ?? "",
      address: data.address ?? "",
    });
  }
}
