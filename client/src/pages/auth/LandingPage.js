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

      <section className="text-gray-600 body-font mt-8" id="panduan">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2d9UnJzArXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Panduan menginstall
              <br className="hidden lg:inline-block" />plugin Metamask
            </h1>
            <p className="mb-8 leading-relaxed">Metamask merupakan sebuah dompet kripto yang paling banyak digunakan, Metamask bisa diinstall sebagai plugin pada Browser Chrome, Mozilla, dan Edge. Untuk itu jika anda tidak memahami cara install yang tepat silahkan tonton video kami atau baca panduan melalui tombol dibawah ini</p>
            <div className="flex justify-center">
            <button
            onClick={
              (e) => {
                window.location.href='https://drive.google.com/file/d/1NPSSsOQMo9TW7bgJNhQYdpnHsXmhdU-H/view?usp=drivesdk';
                }
            }
             type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Panduan</button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font" id="team">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">Tim Kami</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Mengembangkan produk software Narescertificate kompleks, tim kami terdiri dari 3 orang dengan spesialisasi tersendiri. Kami saling bekerja sama demi tercapai nya misi kami untuk menjadi layanan sertifikat berbasis blockchain yang terpercaya</p>
          </div>
          <div className="flex flex-wrap justify-between m-4 px-10">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://i.ibb.co/fnTWm3G/Whats-App-Image-2022-11-21-at-20-45-46.jpg" />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Alfian Prisma Yopiangga</h2>
                  <h3 className="text-gray-500 mb-3">Team Leader</h3>
                  
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://i.ibb.co/0s8ZSpZ/image.png" />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">M. Roy Farchan</h2>
                  <h3 className="text-gray-500 mb-3">Developer</h3>
            
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://i.ibb.co/mc285Cs/Whats-App-Image-2022-11-21-at-20-45-46-1.jpg" />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">Alan Al-Ansori</h2>
                  <h3 className="text-gray-500 mb-3">Non Technical</h3>
                  
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative" id="kontak">
        <div className="absolute inset-0 bg-gray-300">
          <iframe width="100%" height="100%" frameBorder={0} marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.691977074115!2d112.79156701477496!3d-7.2758470947483636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sid!2sid!4v1669039475351!5m2!1sid!2sid" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Beri kami umpan balik untuk memberi layanan sertifikat blockchain yang terbaik</p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
            </div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim Email</button>
            
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
