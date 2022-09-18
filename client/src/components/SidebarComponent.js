import React, { useContext, useEffect } from "react";
import {
  FiActivity,
  FiAward,
  FiBook,
  FiBox,
  FiCheckSquare,
  FiDownload,
  FiGift,
  FiCalendar,
  FiHome,
  FiLayers,
  FiList,
  FiPlusSquare,
  FiSlack,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { TbFileCertificate } from 'react-icons/tb';
import { Link } from "react-router-dom";
import { PageContext } from "../context/PageContext";

export function SidebarUploaderComponent() {
  const { page, setPage } = useContext(PageContext);

  const listPage = [
    {
      id: "home",
      link: "/",
      title: "Beranda",
      icon: FiHome,
      group: "Utama",
    },
    {
      id: "list-event",
      link: "/acara",
      title: "Semua Acara",
      icon: FiLayers,
      group: "Sertifikat",
    },
    {
      id: "create-certificate",
      link: "/buat-sertifikat",
      title: "Sertifikat",
      icon: FiPlusSquare,
      group: "Sertifikat",
    },
    {
      id: "list-request",
      link: "/permintaan-unduh",
      title: "Permintaan Unduh",
      icon: FiDownload,
      group: "Permintaan",
    },
    {
      id: "list-report-request",
      link: "/semua-permintaan",
      title: "Semua Permintaan",
      icon: FiList,
      group: "Permintaan",
    },
    {
      id: "profile",
      link: "/profile",
      title: "Profile Organisasi",
      icon: FiSlack,
      group: "Akun",
    },
  ];

  return (
    <div
      id="sideBar"
      className="flex flex-col flex-wrap bg-white text-dark border-r border-gray-100 p-6 min-h-screen w-2/12 md:shadow-xl mt-10"
    >
      <div className="flex flex-col">
        <div className="text-right hidden md:block mb-4">
          <button id="sideBarHideBtn">
            <i className="fad fa-times-circle"></i>
          </button>
        </div>

        {listPage.map((el, idx) => {
          return (
            <>
              {idx == 0 ? (
                <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
                  {el.group}
                </p>
              ) : (
                ""
              )}
              {idx > 0 && el.group != listPage[idx - 1].group ? (
                <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
                  {el.group}
                </p>
              ) : (
                ""
              )}
              <Link
                to={el.link}
                className={
                  el.id == page
                    ? "mb-3 flex items-center capitalize font-medium text-sm text-indigo-600 transition ease-in-out duration-500"
                    : "mb-3 flex items-center capitalize font-medium text-sm hover:text-indigo-600 transition ease-in-out duration-500"
                }
              >
                <el.icon className="mr-3" />
                {el.title}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
