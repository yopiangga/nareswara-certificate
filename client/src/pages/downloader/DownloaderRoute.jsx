import React from "react";
import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";

import DownloaderLayout from "../../layouts/DownloaderLayout";
import { HomePage as DownloaderHomePage } from "../downloader/HomePage";
import ProfilePage from "./ProfilePage";

export default function DownloaderRoute() {
    return (
        <BrowserRouter>
            <DownloaderLayout>
                <div className="bg-gray-100 p-6 mt-16 w-10/12 text-dark">
                    <Routes>
                        <Route path="/home" element={<DownloaderHomePage />} exact />
                    </Routes>
                    <Routes>
                        <Route path="/profile" element={<ProfilePage />} exact />
                    </Routes>
                </div>
            </DownloaderLayout>
        </BrowserRouter>
    );
}