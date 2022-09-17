import React from "react";

export default function AuthLayout({ children, title }) {
  const defaultTitle = "Autentikasi";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      {/* <Head>
        <title>{pageTitle}</title>
      </Head> */}
      <div className="w-full bg-cyellow-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto p-1 bg-white shadow-lg rounded-3xl overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
}
