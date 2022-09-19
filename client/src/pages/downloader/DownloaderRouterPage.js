import React, { useContext } from "react";

import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import DownloaderLayout from "src/layouts/DownloaderLayout";
import { HomePage } from "./HomePage";
import { ListCertificateByEventPage } from "./ListCertificateByEventPage";
import { ListRequestPage } from "./ListRequestPage";
import { NewRequestPage } from "./NewRequestPage";

export default function DownloaderRouterPage() {
  return (
    <BrowserRouter>
      <DownloaderLayout>
        <div className="bg-gray-100 p-6 mt-16 w-10/12 text-dark">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
          </Routes>
          <Routes>
            <Route path="/permintaan-baru" element={<NewRequestPage />} exact />
          </Routes>
          <Routes>
            <Route
              path="/permintaan-baru/:id"
              element={<ListCertificateByEventPage />}
              exact
            />
          </Routes>
          <Routes>
            <Route
              path="/daftar-permintaan"
              element={<ListRequestPage />}
              exact
            />
          </Routes>
        </div>
      </DownloaderLayout>
    </BrowserRouter>
  );
}
