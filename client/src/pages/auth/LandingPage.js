import onlineTest from "../../assets/images/online_test.svg";
import { Link } from "react-router-dom";
import { NavbarLanding } from "src/components/NavbarComponent";
import { FooterComponent } from "src/components/FooterComponent";

export default function LandingPage() {
  return (
    <div>
      <NavbarLanding />

      <section className="pt-20">
        <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div className="relative h-64 rounded-lg sm:h-80 lg:h-full lg:order-last">
              <img alt="Party" src={onlineTest} className="w-full h-full" />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Dapatkan sertifikat asli tanpa duplikasi
              </h2>

              <p className="mt-4 text-gray-600">
                Nares Certificate adalah aplikasi berbasis website yang dapat
                digunakan oleh pengguna untuk membuat sertifikat secara mudah,
                cepat dan terjamin keasliannya.
              </p>

              <div className="flex lg:flex-row flex-col gap-2 mt-8">
                <Link to="/register">
                  <a className="inline-flex items-center px-8 py-3 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
                    <span className="text-sm font-medium">
                      {" "}
                      Mulai Sekarang{" "}
                    </span>

                    <svg
                      className="w-5 h-5 ml-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLineJoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </Link>

                <Link to="/verify">
                  <a className="inline-flex items-center px-8 py-3 text-gray-600 bg-gray-200 border border-gray-200 rounded hover:border-indigo-600 hover:bg-transparent hover:text-indigo-600 active:text-gray-100 focus:outline-none focus:ring">
                    <span className="text-sm font-medium">
                      {" "}
                      Cek Sertifikat{" "}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
