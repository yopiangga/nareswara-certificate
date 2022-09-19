import React from "react";
import { NavbarDownloaderComponent } from "src/components/NavbarComponent";
import { SidebarDownloaderComponent } from "src/components/SidebarComponent";

export default function DownloaderLayout({ children, title }) {
  const defaultTitle = "Nareswara Certificate";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <div className="bg-gray-100">
        <NavbarDownloaderComponent />
        <div className="w-full flex">
          <SidebarDownloaderComponent />
          {children}
        </div>

        <div></div>
      </div>
    </>
  );
}
