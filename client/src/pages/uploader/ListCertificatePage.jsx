import { FiPlusCircle, FiDownload } from "react-icons/fi";

export default function ListCertificatePage() {
  return (
    <>
      <div>
        <div className="p-4 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
          <div className="mb-1 w-full">
            <div className="mb-4">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Daftar Sertifikat
              </h1>
            </div>
            <div className="sm:flex">
              <div className="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
                <form className="lg:pr-3" action="#" method="GET">
                  <label htmlFor="users-search" className="sr-only">
                    Cari
                  </label>
                  <div className="mt-1 relative lg:w-64 xl:w-96">
                    <input
                      type="text"
                      name="email"
                      id="users-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Cari sertifikat"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
                <button
                  type="button"
                  data-modal-toggle="add-user-modal"
                  className="w-1/2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
                >
                  <FiPlusCircle size={24} style={{ marginRight: "8px" }} />
                  Tambah
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden">
                <table className="table-fixed bg-white min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Nama
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Event
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Tanggal
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="p-4">
                        <div className="text-sm font-normal text-gray-500">
                          <div className="text-base text-gray-900">
                            Neil Sims
                          </div>
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="text-sm font-normal text-gray-500">
                          <div className="text-base text-gray-900">
                            OB Dynamic 2022
                          </div>
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="text-sm font-normal text-gray-500">
                          <div className="text-base text-gray-900">
                            2022-11-20
                          </div>
                        </div>
                      </td>

                      <td className="p-4">
                        <button
                          type="button"
                          data-modal-toggle="user-modal"
                          className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                        >
                          <FiDownload size={18} style={{ marginRight: "8px" }}/>
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
