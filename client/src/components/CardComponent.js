import { useContext } from "react";
import { Link } from "react-router-dom";
import certificatePreview from "src/assets/images/certificate-preview.png";
import { UserContext } from "src/context/UserContext";

export function CardComponentDefault({ data }) {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="relative z-10 max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full shadow-lg rounded-xl mb-8 lg:mt-0">
      <div className="card">
        <div className="card-header mx-4 -mt-6">
          <Link
            to={`${user.role == 2 ? "/acara" : "/permintaan-baru"}/${data._id}`}
          >
            <img
              className="w-auto rounded-lg shadow-lg"
              src={data.certificate.image.path}
              alt="event-image"
            />
          </Link>
        </div>
        <div className="card-body p-4">
          <Link to={`/acara/${data._id}`}>
            <h4 className="font-semibold mb-1 hover:text-indigo-600">
              {data.title}
            </h4>
          </Link>
          <p className="opcacity-60 mb-4">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export function CardComponentTemplate({ _id, title, description, image }) {
  return (
    <div className="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
      <div className="card">
        <div className="card-header mx-4 -mt-6">
          <Link to={`/template/${_id}`}>
            <img
              className="w-auto rounded-lg shadow-lg"
              src={image}
              alt="event-image"
            />
          </Link>
        </div>
        <div className="card-body p-4">
          <Link to={`/template/${_id}`}>
            <h4 className="font-semibold mb-1 hover:text-indigo-600">
              {title}
            </h4>
          </Link>
          <p className="opcacity-60 mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function CardComponentCertificateDownload({ data, callback }) {
  const { user, setUser } = useContext(UserContext);

  function handleCopy() {
    navigator.clipboard.writeText(data.link);

    callback(data.link);
  }

  return (
    <div className="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
      <div className="card">
        <div className="card-header mx-4 -mt-6">
          <img
            className="w-auto rounded-lg shadow-lg"
            src={certificatePreview}
            alt="event-image"
          />
        </div>
        <div className="card-body p-4">
          <h4 className="font-semibold mb-1 hover:text-indigo-600">
            {data.title}
          </h4>
          <div className="flex gap-4 justify-between">
            <p className="opcacity-60 mb-4 truncate w-1/2">{data.link}</p>
            <button
              onClick={handleCopy}
              className="h-6 text-xs px-3 rounded-md bg-gray-100 text-slate-600"
            >
              Salin URL
            </button>
          </div>
          <a
            href={data.link}
            className="py-2 px-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md border-indigo-300 rounded-md"
            download
          >
            Unduh
          </a>
        </div>
      </div>
    </div>
  );
}

export function CardHomeCount({ title, value }) {
  return (
    <div className="">
      <a className="block p-6 max-w-sm w-full md:w-72 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
          {title}
        </p>
        <h4 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          {value}
        </h4>
      </a>
    </div>
  );
}
