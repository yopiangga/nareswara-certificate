export function TemplateCertificateComponent(data) {
  return (
    <div
      key={data.id}
      className="leancanvas-container relative bg-white flex mb-10 mx-auto"
      id={`canvas-${data.id + 1}`}
      style={{ width: "870px", height: "624px" }}
      //   ref={ref[idx]}
    >
      <img src={data.image_path} className="absolute z-0" />
      <div className={`${data.author.class}`}>
        <h3>{data.author.value}</h3>
        <h4 className="text-right text-xs">{`${data.number.value}`}</h4>
      </div>
      <div className={`${data.name.class}`}>
        <h1>Nama : Alfian Prisma Yopiangga</h1>
      </div>
      <div className={`${data.description.class}`}>
        <p>{data.description.value}</p>
      </div>
      <div className={`${data.title.class}`}>
        <h3 className="text-lg font-bold ">{data.title.value}</h3>
        <h4 className="text-xs">{data.date.value}</h4>
      </div>
    </div>
  );
}
