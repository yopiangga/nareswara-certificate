import React, { useContext } from "react";
import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import DownloaderLayout from "src/layouts/DownloaderLayout";
import { EditProfilePage } from "./EditProfilePage";
import { HomePage } from "./HomePage";
import { ListCertificatePage } from "./ListCertificatePage";
import { ProfilePage } from "./ProfilePage";

export default function DownloaderRouterPage() {
  return (
    <BrowserRouter>
      <DownloaderLayout>
        <div className="bg-gray-100 p-6 mt-16 w-10/12 text-dark">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
          </Routes>
          <Routes>
            <Route path="/sertifikat" element={<ListCertificatePage />} exact />
          </Routes>
          <Routes>
            <Route path="/profile" element={<ProfilePage />} exact />
          </Routes>
          <Routes>
            <Route path="/edit-profile" element={<EditProfilePage />} exact />
          </Routes>
        </div>
      </DownloaderLayout>
    </BrowserRouter>
  );
}
