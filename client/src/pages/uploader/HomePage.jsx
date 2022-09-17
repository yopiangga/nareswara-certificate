export function HomePage() {
  return (
    <>
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
      <div>
      <a href className="flex flex-col justify-between p-8 bg-white rounded-sm shadow-xl transition-shadow group hover:shadow-lg">
        <div>
          <h5 className="text-5xl font-bold text-indigo-600">121</h5>
          <div className="pt-2 mt-4 border-t-2 border-indigo-100">
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Request Total</p>
          </div>
        </div>
      </a>
      </div>

      <div>
      <a href className="flex flex-col justify-between p-8 bg-white rounded-sm shadow-xl transition-shadow group hover:shadow-lg">
        <div>
          <h5 className="text-5xl font-bold text-green-600">56</h5>
          <div className="pt-2 mt-4 border-t-2 border-indigo-100">
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Request Disetujui</p>
          </div>
        </div>
      </a>
      </div>

      <div>
      <a href className="flex flex-col justify-between p-8 bg-white rounded-sm shadow-xl transition-shadow group hover:shadow-lg">
        <div>
          <h5 className="text-5xl font-bold text-red-600">10</h5>
          <div className="pt-2 mt-4 border-t-2 border-red-100">
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Request Ditolak</p>
          </div>
        </div>
      </a>
      </div>
      
      <div>
      <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">Daftar Sertifikat</p>
        <h4 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">4</h4>
      </a>
      </div>

      <div>
      <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">Total Sertifikat</p>
        <h2 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">10</h2>
      </a>
      </div>

    </div>
      
    </>
  );
}
