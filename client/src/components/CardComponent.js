import { useContext } from "react";
import { Link } from "react-router-dom";
import certificatePreview from "src/assets/images/certificate-preview.png";
import { UserContext } from "src/context/UserContext";

export function CardComponentDefault({ data }) {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
      <div className="card">
        <div className="card-header mx-4 -mt-6">
          <Link
            to={`${user.role == 1 ? "/acara" : "/permintaan-baru"}/${data.id}`}
          >
            <img
              className="w-auto rounded-lg shadow-lg"
              src={certificatePreview}
              alt="event-image"
            />
          </Link>
        </div>
        <div className="card-body p-4">
          <Link to={`/acara/${data.id}`}>
            <h4 className="font-semibold mb-1 hover:text-indigo-600">
              {data.data.eventName}
            </h4>
          </Link>
          <p className="opcacity-60 mb-4">{data.data.eventDescription}</p>
        </div>
      </div>
    </div>
  );
}

export function CardComponentCertificateDownload({ data }) {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
      <div className="card">
        <div className="card-header mx-4 -mt-6">
          <Link to={`${data.data.link}`}>
            <img
              className="w-auto rounded-lg shadow-lg"
              src={certificatePreview}
              alt="event-image"
            />
          </Link>
        </div>
        <div className="card-body p-4">
          <Link to={`/acara/${data.id}`}>
            <h4 className="font-semibold mb-1 hover:text-indigo-600">
              {data.data.eventName}
            </h4>
          </Link>
          <p className="opcacity-60 mb-4">{data.data.link}</p>
          <a
            href={data.data.link}
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
