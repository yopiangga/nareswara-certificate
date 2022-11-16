import axios from "axios";
import baseUrl from "src/config/Url";

export class UserServices {
  async add(data) {
    const res = await axios.post(`${baseUrl}/user/add`, data);
    return res.data;
  }

  async getAll() {
    const res = await axios.get(`${baseUrl}/user`);
    return res.data;
  }

  async getUser(value) {
    const res = await axios.get(`${baseUrl}/user/${value}`);
    return res.data;
  }

  async getUserByEmail(email) {
    const res = await axios.get(`${baseUrl}/user/get-one?email=${email}`);
    return res.data;
  }

  async delete(id) {
    const res = await axios.post(`${baseUrl}/user/delete`, { _id: id });
    return res.data;
  }

  async update(id, data) {
    const res = await axios.put(`${baseUrl}/user/update`, {
      _id: id,
      data: data,
    });
    return res.data;
  }
}
