export default function ProfilePage() {
  return (
    <>
      <div>
        <div className="p-4 block sm:flex items-center justify-between lg:mt-1.5">
          <div className="mb-1 w-full">
            <div className="mb-4">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Profil
              </h1>
            </div>

            <section className="text-gray-600 body-font">
              <div className="container px-5 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                  <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                      <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-10 h-10"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                          Phoebe Caulfield
                        </h2>
                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                        <p className="text-base">
                          farhanroy@gmail.com
                        </p>
                        <p className="text-sm">
                          Surabaya, Indonesia
                        </p>
                      </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                      <form>
                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            value="farhanroy@gmail.com"
                            required=""
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="name"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Nama
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="Phoebe Caulfield"
                            required=""
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="image"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Foto Profile
                          </label>
                          <input
                            type="file"
                            id="image"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            accept="image/*"
                            required=""
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="address"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Alamat
                          </label>
                          <input
                            type="text"
                            id="address"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="Surabaya, Indonesia"
                            required=""
                          />
                        </div>
                        
                        <button
                          type="submit"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Update
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
