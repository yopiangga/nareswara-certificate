import React, { useState, useContext } from "react";

import { ModalInformationLittle } from "../../components/ModalInformationComponent";
import { SmartContractContext } from "src/context/SmartContractContext";


export default function VerifyPage() {
  const [data, setData] = useState({ address: "", cid: "" });

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

    const isAny = await verifyCertificate(data);

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
    <div className="flex flex-col items-center justify-center mx-auto md:h-screen ">
      <div id="revue-embed" className="mb-4 max-w p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email anda
            </label>
            <input
              type="text"
              name="address"
              id="email"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Meta ID"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Kata sandi
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
          <div className="flex items-center justify-between">
            {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div> */}
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
    </>
  );
}
