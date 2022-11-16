import React, { useState } from "react";
import axios from "axios";
import baseUrl from "src/config/Url";

export class CountServices {
  async getAllEventByAuthor(email) {
    const res = await axios.get(`${baseUrl}/event/author/${email}`);
    return res.data;
  }

  async getAllCertificateByAuthor(email) {
    const res = await axios.get(`${baseUrl}/certificate/author/${email}`);
    return res.data;
  }

  async getAllCertificateByParticipant(email) {
    const res = await axios.get(`${baseUrl}/certificate/participant/${email}`);
    return res.data;
  }
}
