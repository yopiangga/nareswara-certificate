import { FiUsers } from "react-icons/fi";

export function CardEvent({ title, content, eventImage, userJoined }) {
  return (
    <div className="p-4 md:w-1/3 ">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={eventImage}
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{content}</p>
          <div className="flex items-center flex-wrap ">
            <a
              href="#"
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Lihat Sertifikat
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-200">
              <FiUsers /> {userJoined}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
