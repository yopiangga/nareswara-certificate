import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../config/Firebase";
const auth = getAuth(app);

export class AuthServices {
  static async login(email, password) {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } catch (err) {
      return err;
    }
  }

  static async register(email, password) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res;
    } catch (err) {
      alert(err.message);
      return err;
    }
  }

  static checkLogin() {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        // console.log("check login");
        return user;
      } else {
        // console.log("else");
        return false;
      }
    });
  }

  static async logout() {
    const res = await signOut(auth);
    return res;
  }
}
