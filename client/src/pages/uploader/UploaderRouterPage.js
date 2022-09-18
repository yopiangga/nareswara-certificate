import React, { useContext } from "react";
import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";

import UploaderLayout from "../../layouts/UploaderLayout";
import { HomePage } from "./HomePage";
import ListEventPage from "./ListEventPage";
import ListCertificatePage from "./ListCertificatePage";
import ListRequestPage from "./ListRequestPage";
import ProfilePage from "./ProfilePage";

export default function UploaderRouterPage() {
  return (
    <BrowserRouter>
      <UploaderLayout>
        <div className="bg-gray-100 p-6 mt-16 w-10/12 text-dark">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
          </Routes>
          <Routes>
            <Route path="/acara" element={<ListEventPage />} exact />
          </Routes>
          <Routes>
            <Route path="/buat-sertifikat" element={<ListCertificatePage />} exact />
          </Routes>
          <Routes>
            <Route path="/semua-permintaan" element={<ListRequestPage />} exact />
          </Routes>
          <Routes>
            <Route path="/profile" element={<ProfilePage />} exact />
          </Routes>
        </div>
      </UploaderLayout>
    </BrowserRouter>
  );
}
