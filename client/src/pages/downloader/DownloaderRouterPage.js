import React, { useContext } from "react";
import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { SidebarContext } from "src/context/SidebarContext";
import DownloaderLayout from "src/layouts/DownloaderLayout";
import { EditProfilePage } from "./EditProfilePage";
import { HomePage } from "./HomePage";
import { ListCertificatePage } from "./ListCertificatePage";
import { ProfilePage } from "./ProfilePage";

export default function DownloaderRouterPage() {
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <BrowserRouter>
      <DownloaderLayout>
        <div className="bg-gray-100 p-6 mt-16 lg:w-10/12 w-full text-dark min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
