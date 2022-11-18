import React, { useContext } from "react";

import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { SidebarContext } from "src/context/SidebarContext";
import AdminLayout from "../../layouts/AdminLayout";
import { CertificateTemplatePage } from "./CertificateTemplatePage";
import { CreateCertificateTemplatePage } from "./CreateCertificateTemplatePage";
import { EditProfilePage } from "./EditProfilePage";
import { HomePage } from "./HomePage";
import { ListCertificateTemplatePage } from "./ListCertificateTemplatePage";
import { ProfilePage } from "./ProfilePage";

export default function AdminRouterPage() {
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <BrowserRouter>
      <AdminLayout>
        <div
          className="bg-gray-100 p-6 mt-16 lg:w-10/12 w-full text-dark min-h-screen"
          onClick={() => setSidebar(!sidebar)}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route
              path="/template"
              element={<ListCertificateTemplatePage />}
              exact
            />
          </Routes>
          <Routes>
            <Route
              path="/template/:id"
              element={<CertificateTemplatePage />}
              exact
            />
          </Routes>
          <Routes>
            <Route
              path="/buat-template"
              element={<CreateCertificateTemplatePage />}
              exact
            />
          </Routes>
          <Routes>
            <Route path="/profile" element={<ProfilePage />} exact />
          </Routes>
          <Routes>
            <Route path="/edit-profile" element={<EditProfilePage />} exact />
          </Routes>
        </div>
      </AdminLayout>
    </BrowserRouter>
  );
}
