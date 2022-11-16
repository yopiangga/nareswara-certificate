import React, { useState } from "react";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";
import axios from "axios";
import baseUrl from "src/config/Url";

const storage = getStorage();

export class TemplateServices {
  async upload(file) {
    const storageRef = ref(storage, `files/templates/${file.name}`);
    const uploadTask = await uploadBytesResumable(storageRef, file);
    const downloadURL = await getDownloadURL(uploadTask.ref);
    return downloadURL;
  }

  async add(data) {
    const res = await axios.post(`${baseUrl}/template/add`, data);
    return res.data;
  }

  async getAll() {
    const res = await axios.get(`${baseUrl}/template`);
    return res.data;
  }

  async getOne(value) {
    const res = await axios.get(`${baseUrl}/template/${value}`);
    return res.data;
  }

  async delete(id) {
    const res = await axios.post(`${baseUrl}/template/delete`, { _id: id });
    return res.data;
  }

  async update(id, data) {
    const res = await axios.put(`${baseUrl}/template/update`, {
      _id: id,
      data: data,
    });
    return res.data;
  }
}
