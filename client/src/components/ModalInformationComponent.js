import React from "react";

export function ModalInformationLittle(props) {
  if (props.status)
    return (
      <div className="flex flex-col p-8 bg-white shadow-lg hover:shodow-lg rounded-2xl fixed z-40 right-10 bottom-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-indigo-400 bg-blue-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none">{props.title}</div>
              <p className="text-sm text-gray-600 leading-none mt-1">
                {props.description}
              </p>
            </div>
          </div>
          <button
            onClick={props.handleClose}
            className="flex-no-shrink bg-indigo-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-indigo-500 text-white rounded-full"
          >
            Tutup
          </button>
        </div>
      </div>
    );
  else {
    return "";
  }
}

export function ModalConfirmationComponent(props) {
  if (props.status) {
    return (
      <div
        id="defaultModal"
        className="overflow-y-auto fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-black bg-opacity-40"
      >
        <div className="relative max-w-2xl md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Perhatikan!
              </h3>
              
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {props.content1}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {props.content2}
              </p>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                onClick={props.handleSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Kirim
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                onClick={props.handleClose}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (<></>);
  }
}
