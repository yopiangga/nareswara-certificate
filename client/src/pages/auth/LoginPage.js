import React, { useContext, useState } from "react";
import app from "../../config/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Btn1Active } from "../../components/ButtonComponent";
import { UserContext } from "../../context/UserContext";
import { AuthServices } from "../../services/AuthServices";
import { UserServices } from "../../services/UserServices";

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("ristekbempens@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resAuth = await AuthServices.login(email, password);

    if (resAuth?.operationType == "signIn") {
      const resUser = await UserServices.getUser("email", resAuth.user.email);

      if (resUser != false) {
        setUser(resUser);
      }
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-gray-50">
        <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Good To See You Again
            </h1>
            <p className="mt-4 text-gray-500"></p>
          </div>
          <form
            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Email anda"
                  value={email}
                  onChange={(e) => setEmail(e.value)}
                />
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Kata sandi"
                  value={password}
                  onChange={(e) => setPassword(e.value)}
                />
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <a className="underline" href="">
                  Sign up
                </a>
              </p>
              <Btn1Active title="Masuk" onTap={() => {}} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
