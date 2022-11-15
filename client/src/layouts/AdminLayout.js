import React from "react";
import { NavbarAdminComponent } from "../components/NavbarComponent";
import { SidebarAdminComponent } from "../components/SidebarComponent";

export default function AdminLayout({ children, title }) {
  const defaultTitle = "Nareswara Certificate";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <div className="bg-gray-100">
        <NavbarAdminComponent />
        <div className="w-full flex">
          <SidebarAdminComponent />
          {children}
        </div>

        <div></div>
      </div>
    </>
  );
}
