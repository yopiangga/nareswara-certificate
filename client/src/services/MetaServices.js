import React, { useState } from "react";
import ipfs from "src/config/IPSF";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";

const storage = getStorage();

export class MetaServices {
  async uploadPDF(file) {
    try {
      const res = await ipfs.add(file);
      // console.log(res);
      return res.path;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async upload(file) {
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  }
}
