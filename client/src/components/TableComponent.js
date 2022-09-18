export function TableComponentDefault({ header, body }) {
  if (header.length == 0) {
    return;
  } else
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              {header?.map((el, idx) => {
                return (
                  <th key={idx} scope="col" className="px-6 py-3">
                    {el}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {body?.map((value, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  {value.map((val, i) => {
                    if (i == 0) {
                      return (
                        <th
                          key={i}
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          {val}
                        </th>
                      );
                    } else {
                      return (
                        <td key={i} className="px-6 py-4">
                          {val}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}
