import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardComponentDefault } from "src/components/CardComponent";
import { TableComponentDefault } from "src/components/TableComponent";
import { EventServices } from "src/services/EventServices";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import templateCertificate from "src/assets/images/template-certificate.jpg";
import { MetaServices } from "src/services/MetaServices";
import { CertificateServices } from "src/services/CertificateServices";

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

  const loopDownload = () => {
    for (let i = 0; i < certificates.length; i++) {
      download(i);
    }
  };

  const download = async (index) => {
    const date = new Date();
    const time = date.getTime();
    html2canvas(document.getElementById(`canvas-${index + 1}`)).then(
      async (canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");
        const pdf = new jsPDF({
          orientation: "l",
          unit: "mm",
          format: "a4",
          putOnlyUsedFonts: true,
        });
        pdf.addImage(imgData, "JPEG", 0, 0, 297, 210);

        var file = pdf.output("blob");
        var fd = new File([file], `${time}-${certificates[index][2]}.pdf`, {
          type: "application/pdf",
        });
        // const res = await MetaServices.upload(fd);
        // const res = await MetaServices.uploadPDF(fd);

        const resCert = await CertificateServices.addCertificate(
          `${time}-${certificates[index][2]}`,
          {
            email: certificates[index][0],
            emailAuthor: event.email,
            eventName: event.eventName,
            dateCertificate: time,
            link: `${time}-${certificates[index][2]}`,
          }
        );
      }
    );
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center my-5">
        <h1 className="text-lg font-bold my-3 mb-3">{event?.eventName}</h1>
        <button
          className="py-2 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md border-indigo-300"
          onClick={() => {
            loopDownload();
          }}
        >
          Kirim Sertifikat
        </button>
      </div>
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
                  key={idx}
                  className="leancanvas-container relative bg-white flex mb-10 mx-auto"
                  id={`canvas-${idx + 1}`}
                  style={{ width: "870px", height: "624px" }}
                  ref={ref[idx]}
                >
                  <img src={templateCertificate} className="absolute z-0" />
                  <div className="bg-transparent h-10 left-64 right-64 top-64 mt-5 absolute flex justify-center items-center">
                    <h1 className="font-black text-3xl text-teal-900 text-center">
                      {el[1][0]}
                      {el[1][1]}
                      {el[1][2]}
                      {el[1][3]}
                      {el[1][4]}
                      {el[1][5]}
                      {el[1][6]}
                      {el[1][7]}
                      {el[1][8]}
                      {el[1][9]}
                      {el[1][10]}
                      {el[1][11]}
                      {el[1][12]}
                      {el[1][13]}
                      {el[1][14]}
                      {el[1][15]}
                      {el[1][16]}
                      {el[1][17]}
                      {el[1][18]}
                      {el[1][19]}
                      {el[1][20]}
                    </h1>
                  </div>
                  <div className="bg-transparent h-32 left-44 right-44 top-72 mt-7 absolute flex justify-center items-center overflow-hidden">
                    <p className="font-normal text-sm text-teal-900 text-center">
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
