import Logo from "src/logo.svg";
export function FooterComponent() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img className="mr-3 h-6 sm:h-9" src={Logo} />
          <span className="ml-3 text-lg">Nares Certificate</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 — Tim Nareswara
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href="https://pens.ac.id">
            <img
              src="https://cdn-icons-png.flaticon.com/512/154/154843.png"
              className="h-4 sm:h-5"
            />
          </a>
        </span>
      </div>
    </footer>
  );
}
