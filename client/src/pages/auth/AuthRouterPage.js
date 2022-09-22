import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../landing";

import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

export default function AuthRouterPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} exact />
                <Route path="/login" element={<LoginPage />} exact />
                <Route path="/register" element={<RegisterPage />} exact />
                <Route path="*" element={<LoginPage />} exact />
            </Routes>
        </BrowserRouter>
    );
}