import React, { useContext } from "react";

import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import UploaderLayout from "../layouts/UploaderLayout";

export default function UploaderPage() {
  return (
    <BrowserRouter>
      <UploaderLayout>
        {/* <div className="bg-gray-100 p-6 mt-16 w-10/12 text-dark">
          <Routes>
            <Route path="/" element={<Beranda />} exact />
          </Routes>
          <Routes>
            <Route path="/semua-pengguna" element={<SemuaPengguna />} exact />
          </Routes>
          <Routes>
            <Route path="/semua-transaksi" element={<SemuaTransaksi />} exact />
          </Routes>
          <Routes>
            <Route path="/akun" element={<Akun />} exact />
          </Routes>
          <Routes>
            <Route path="/edit-akun" element={<EditAkun />} exact />
          </Routes>
        </div> */}
      </UploaderLayout>
    </BrowserRouter>
  );
}
