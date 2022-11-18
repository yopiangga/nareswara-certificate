import React, { useState, useContext } from "react";

import { ModalInformationLittle } from "../../components/ModalInformationComponent";
import { SmartContractContext } from "src/context/SmartContractContext";
import { NavbarLanding } from "src/components/NavbarComponent";
import { FooterComponent } from "src/components/FooterComponent";
import { UserServices } from "../../services/UserServices";

export default function VerifyPage() {
  const userServices = new UserServices();
  const [data, setData] = useState({ email: "", cid: "" });

  const { verifyCertificate } = useContext(SmartContractContext);

  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resUser = await userServices.getUserByEmail(data.email);
    console.log(resUser.meta_id);
    const isAny = await verifyCertificate(resUser.meta_id, data.cid);
    

    if (isAny) {
      alert("Selamat!! sertifikat Sudah belum terdaftar di jaringan kami");
    } else {
      alert("Maaf sertifikat anda belum terdaftar di jaringan kami");
    }
  };

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
  };

  return (
    <>
      <ModalInformationLittle
        status={modalInformationLittle.status}
        title={modalInformationLittle.title}
        description={modalInformationLittle.description}
        handleClose={handleCloseModal}
      />
      <NavbarLanding />
      <div className="flex flex-col items-center justify-center mx-auto md:h-screen md:py-0 py-10">
        <div
          id="revue-embed"
          className="mb-4 w-11/12 md:w-96 p-6 md:mt-0 mt-16 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email anda
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                CID
              </label>
              <input
                type="text"
                name="cid"
                onChange={handleChange}
                id="password"
                placeholder="CID"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Check
            </button>
          </form>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
