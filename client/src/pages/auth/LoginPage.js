import React, { useContext, useState } from "react";

import { UserContext } from "../../context/UserContext";
import { AuthServices } from "../../services/AuthServices";
import { UserServices } from "../../services/UserServices";

import Logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { LoadingContext } from "src/context/LoadingContext";
import { SmartContractContext } from "src/context/SmartContractContext";
import { Loading } from "src/components/Loader";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const userServices = new UserServices();
  const navigate = useNavigate();
  const { connectWalletWithId, currentAccount } =
    useContext(SmartContractContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);
  const [dataAuth, setDataAuth] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setDataAuth({ ...dataAuth, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resAuth = await AuthServices.login(dataAuth.email, dataAuth.password);

    if (resAuth?.operationType == "signIn") {
      setLoading(true);
      const resUser = await userServices.getUser("email", resAuth.user.email);

      if (resUser != null) {
        await connectWalletWithId(resUser.metaId);
        setUser(resUser);
        setLoading(false);
        console.log("Benar");
        navigate("/");
        // if (currentAccount.toString() == resUser.metaId) {

        // } else {
        //   console.log("Salah");
        //   setLoading(false);
        // }
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Loading loading={loading} />
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 min-h-screen">
          <Link to="/">
            <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
              <h2 className="text-2xl">
                Nares <span className="text-indigo-600">Certificate</span>
              </h2>
            </a>
          </Link>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Masuk dengan akun anda
              </h1>
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
                    value={dataAuth.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="contoh@email.com"
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
                    type="password"
                    name="password"
                    value={dataAuth.password}
                    onChange={handleChange}
                    id="password"
                    placeholder="••••••••"
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
                  <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Lupa password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Masuk
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Masih belum punya akun?{" "}
                  <Link to="/register">
                    <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Daftar
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
