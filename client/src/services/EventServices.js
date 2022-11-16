import React, { useState } from "react";
import axios from "axios";
import baseUrl from "src/config/Url";

export class EventServices {
  async add(data) {
    const res = await axios.post(`${baseUrl}/event/add`, data);
    return res.data;
  }

  async getAll() {
    const res = await axios.get(`${baseUrl}/event`);
    return res.data;
  }

  async getAllByEmail(email) {
    const res = await axios.get(`${baseUrl}/event/author/${email}`);
    return res.data;
  }

  async getOne(value) {
    const res = await axios.get(`${baseUrl}/event/${value}`);
    return res.data;
  }

  async delete(id) {
    const res = await axios.post(`${baseUrl}/event/delete`, { _id: id });
    return res.data;
  }

  async update(id, data) {
    const res = await axios.put(`${baseUrl}/event/update`, {
      _id: id,
      data: data,
    });
    return res.data;
  }
}
