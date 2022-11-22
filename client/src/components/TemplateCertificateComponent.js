// export function TemplateCertificateComponent(data) {
//   return (
//     <div
//       key={data.id}
//       className="leancanvas-container relative bg-white flex mb-10 mx-auto"
//       id={`canvas-${data.id + 1}`}
//       style={{ width: "870px", height: "624px" }}
//       //   ref={ref[idx]}
//     >
//       <img src={data.image_path} className="absolute z-0 w-full h-full" />
//       <div className={`${data.author.class}`}>
//         <h3>{data.author.value}</h3>
//         <h4 className="text-right text-xs">{`${data.number.value}`}</h4>
//       </div>
//       <div className={`${data.name.class}`}>
//         <h1>{data.name.value}</h1>
//       </div>
//       <div className={`${data.description.class}`}>
//         <p>{data.description.value}</p>
//       </div>
//       <div className={`${data.title.class}`}>
//         <h3 className="text-lg font-bold ">{data.title.value}</h3>
//         <h4 className="text-xs">{data.date.value}</h4>
//       </div>
//     </div>
//   );
// }

export function TemplateCertificateComponent(data) {
  // data = {
  //   ...data,
  //   title: {
  //     value: "Flutter Developer",
  //     class:
  //       "bg-transparent left-10 w-72 bottom-10 absolute font-black text-teal-900 text-left",
  //   },
  //   number: {
  //     value: "09/2022/RISTEK/BEM",
  //     class:
  //       "bg-transparent h-16 right-10 top-16 absolute text-right text-lg font-bold text-teal-900",
  //   },
  //   author: {
  //     value: "RISTEK BEM PENS",
  //     class:
  //       "bg-transparent h-16 right-10 top-10 absolute text-right text-lg font-bold text-teal-900",
  //   },
  //   description: {
  //     value: "Sebagai peserta dalam ajang Kompetisi BEM 2022.",
  //     class:
  //       "bg-transparent h-32 left-44 right-44 top-72 mt-7 absolute flex justify-center items-center overflow-hidden font-normal text-sm text-teal-900 text-center",
  //   },
  //   date: {
  //     value: "2022-10-20",
  //     class:
  //       "bg-transparent left-10 w-72 bottom-16 font-bold absolute text-teal-900 text-left",
  //   },
  //   name: {
  //     value: "Alfian Prisma Yopiangga",
  //     class:
  //       "bg-transparent h-10 left-64 right-64 top-64 mt-5 absolute flex justify-center items-center font-black text-3xl text-teal-900 text-center",
  //   },
  //   createdAt: {
  //     $date: {
  //       $numberLong: "1668581468993",
  //     },
  //   },
  //   updatedAt: {
  //     $date: {
  //       $numberLong: "1668584927741",
  //     },
  //   },
  // };
  return (
    <div
      key={data.id}
      className="leancanvas-container relative bg-white flex mb-10 mx-auto"
      id={`canvas-${data.id + 1}`}
      style={{ width: "870px", height: "624px" }}
    >
      <img src={data.image_path} className="absolute z-0 w-full h-full" />
      <div className={`${data.author.class}`}>
        <h3>{data.author.value}</h3>
      </div>
      <div className={`${data.number.class}`}>
        <h4>{`${data.number.value}`}</h4>
      </div>
      <div className={`${data.name.class}`}>
        <h1>{data.name.value}</h1>
      </div>
      <div className={`${data.description.class}`}>
        <p>{data.description.value}</p>
      </div>
      <div className={`${data.title.class}`}>
        <h3>{data.title.value}</h3>
      </div>
      <div className={`${data.date.class}`}>
        <h4>{data.date.value}</h4>
      </div>
    </div>
  );
}
