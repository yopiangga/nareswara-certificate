import React, { useContext } from "react";

import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { CreateCertificateTemplatePage } from "./CreateCertificateTemplatePage";
import { EditProfilePage } from "./EditProfilePage";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProfilePage";

export default function AdminRouterPage() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <div className="bg-gray-100 p-6 mt-16 w-10/12 text-dark">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
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
