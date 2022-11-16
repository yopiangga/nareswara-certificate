import React, { useState } from "react";
import axios from "axios";
import baseUrl from "src/config/Url";

export class CertificateServices {
  async add(data) {
    const res = await axios.post(`${baseUrl}/certificate/add`, data);
    return res.data;
  }

  async getAll() {
    const res = await axios.get(`${baseUrl}/certificate`);
    return res.data;
  }

  async getAllByEmail(email) {
    const res = await axios.get(`${baseUrl}/certificate/participant/${email}`);
    return res.data;
  }

  async getAllCertificateByParticipant(email) {
    const res = await axios.get(`${baseUrl}/certificate/participant/${email}`);
    return res.data;
  }

  async getOne(value) {
    const res = await axios.get(`${baseUrl}/certificate/${value}`);
    return res.data;
  }

  async delete(id) {
    const res = await axios.post(`${baseUrl}/certificate/delete`, { _id: id });
    return res.data;
  }

  async update(id, data) {
    const res = await axios.put(`${baseUrl}/certificate/update`, {
      _id: id,
      data: data,
    });
    return res.data;
  }
}
