import logo from "../../logo.svg";
import onlineTest from "../../assets/images/online_test.svg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" class="flex items-center">
            <img src={logo} class="mr-3 h-6 sm:h-9" alt="Nares Logo" />
            <div class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <h2 className="">
                Nares <span className="text-indigo-600">Certificate</span>
              </h2>
            </div>
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 items-center bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-base text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Solusi
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Produk
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Mitra
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Tentang Kami
                </a>
              </li>

              <li>
                <Link to="/login">
                  <a className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Masuk
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div class="relative h-64 rounded-lg sm:h-80 lg:h-full lg:order-last">
              <img
                alt="Party"
                src={onlineTest}
                class="object-cover w-full h-full"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">
                Dapatkan sertifikat asli tanpa duplikasi
              </h2>

              <p class="mt-4 text-gray-600">
                Nares Certificate adalah aplikasi berbasis website yang dapat
                digunakan oleh pengguna untuk membuat sertifikat secara mudah,
                cepat dan terjamin keasliannya.
              </p>

              <Link to="/register">
                <a class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
                  <span class="text-sm font-medium"> Mulai Sekarang </span>

                  <svg
                    class="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer class="text-gray-600 body-font">
        <div class="container py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img class="mr-3 h-6 sm:h-9" src={logo} />
            <span class="ml-3 text-lg">Nares Certificate</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 — Tim Nareswara
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500" href="https://pens.ac.id">
              <img
                src="https://cdn-icons-png.flaticon.com/512/154/154843.png"
                class="h-4 sm:h-5"
              />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
