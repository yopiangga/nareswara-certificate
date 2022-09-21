import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardComponentDefault } from "src/components/CardComponent";
import { TableComponentDefault } from "src/components/TableComponent";
import { EventServices } from "src/services/EventServices";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import templateCertificate from "src/assets/images/template-certificate.jpg";

export function ListCertificatePage() {
  const [event, setEvent] = useState();
  const [certificates, setCertificates] = useState([]);
  const location = useLocation();
  const [load, setLoad] = useState(true);

  const [ref, setRef] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    fetch();
  }, []);

  function init(n) {
    var temp = [];

    for (let i = 0; i < n; i++) {
      temp.push(inputRef);
    }

    return temp;
  }

  async function fetch() {
    const res = await EventServices.getEvent(location.pathname.split("/")[2]);

    var temp = [];

    for (let i = 0; i < res.certificates.length; i++) {
      temp.push([
        res.certificates[i].email,
        res.certificates[i].name,
        res.certificates[i].metaId,
      ]);
    }

    setRef(init(temp.length));
    setEvent(res);
    setCertificates(temp);
    setLoad(false);
  }

  const download = () => {
    html2canvas(ref[0]).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      const pdf = new jsPDF({
        orientation: "l",
        unit: "mm",
        format: "a4",
        putOnlyUsedFonts: true,
      });
      pdf.addImage(imgData, "JPEG", 0, 0, 297, 210);
      pdf.save("lean-canvas.pdf");
    });
  };

  return (
    <>
      <h1 className="text-lg font-bold my-3 mb-3">{event?.eventName}</h1>
      <button
        onClick={() => {
          download();
        }}
      >
        Save Image
      </button>
      {load ? (
        ""
      ) : (
        <TableComponentDefault
          header={["email", "name", "Meta ID"]}
          body={certificates}
        />
      )}

      <div className="my-10"></div>

      <div className="">
        {load == true
          ? ""
          : certificates.map((el, idx) => {
              return (
                <div
                  className="leancanvas-container relative bg-white mb-10 flex "
                  id={`canvas${idx}`}
                  style={{ width: "870px", height: "624px" }}
                  ref={ref[idx]}
                >
                  <img src={templateCertificate} className="absolute z-0" />
                  <div className="bg-transparent h-10 left-64 right-64 top-72 absolute flex justify-center items-center overflow-hidden">
                    <h1 className="absloute z-10 font-black text-3xl text-teal-900 text-center truncate">
                      {el[1]}
                    </h1>
                  </div>
                  <div className="bg-transparent h-32 left-44 right-44 top-72 mt-7 absolute flex justify-center items-center overflow-hidden">
                    <p className="absloute z-10 font-normal text-sm text-teal-900 text-center">
                      {event.descriptionCertificate}
                    </p>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}
