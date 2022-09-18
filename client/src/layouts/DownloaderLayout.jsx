import React from "react";
import { NavbarUploaderComponent } from "../components/NavbarComponent";
import { SidebarDownloaderComponent } from "../components/SidebarComponent";

export default function DownloaderLayout({ children, title }) {
  const defaultTitle = "Nareswara Certificate";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <div className="bg-gray-100">
        <NavbarUploaderComponent />
        <div className="w-full flex">
          <SidebarDownloaderComponent />
          {children}
        </div>

        <div></div>
      </div>
    </>
  );
}