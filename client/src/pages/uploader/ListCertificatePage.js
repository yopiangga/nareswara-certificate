import { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardComponentDefault } from "src/components/CardComponent";
import { TableComponentDefault } from "src/components/TableComponent";
import { EventServices } from "src/services/EventServices";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import templateCertificate from "src/assets/images/template-certificate.jpg";
import { MetaServices } from "src/services/MetaServices";
import { CertificateServices } from "src/services/CertificateServices";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";
import { TemplateCertificateComponent } from "src/components/TemplateCertificateComponent";
import { SmartContractContext } from "src/context/SmartContractContext";
import { UserContext } from "src/context/UserContext";

export function ListCertificatePage() {
  const eventServices = new EventServices();
  const metaServices = new MetaServices();
  const certificateServices = new CertificateServices();

  const navigate = useNavigate();
  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);
  const { currentAccount, redeemCertificate } =
    useContext(SmartContractContext);
  const [event, setEvent] = useState();
  const [certificates, setCertificates] = useState([]);
  const location = useLocation();
  const [load, setLoad] = useState(true);
  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

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
    const res = await eventServices.getOne(location.pathname.split("/")[2]);

    var temp = [];

    for (let i = 0; i < res.participants.length; i++) {
      temp.push([
        res.participants[i].email,
        res.participants[i].name,
        res.participants[i].metaId,
      ]);
    }

    setRef(init(temp.length));
    setEvent(res);
    setCertificates(temp);
    setLoad(false);
  }

  const loopDownload = async () => {
    var temp = [];
    let i = 0;
    setLoading(true);
    for (let i = 0; i < certificates.length; i++) {
      const cid = await download(i);
      temp[i] = [cid, certificates[i][2], currentAccount];
    }

    await redeemCertificate(temp);

    setLoading(false);
    setModalInformationLittle({
      status: true,
      description: `Proses selesai, ${certificates.length} data sertifikat peserta telah terkirim`,
    });
  };

  const download = async (index) => {
    const date = new Date();
    const time = date.getTime();

    const canvas = await html2canvas(
      document.getElementById(`canvas-${index + 1}`)
    );
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

    const path = await metaServices.uploadPDF(fd);

    const resCert = await certificateServices.add({
      participant: {
        email: certificates[index][0],
        name: certificates[index][1],
        metaId: certificates[index][2],
      },
      author: user,
      title: event.title,
      date: event.certificate.date.value,
      link: `https://ipfs.io/ipfs/${path}`,
    });

    return path;
  };

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });

    navigate("/");
  };

  return (
    <>
      <Loading loading={loading} />
      <ModalInformationLittle
        status={modalInformationLittle.status}
        title={modalInformationLittle.title}
        description={modalInformationLittle.description}
        handleClose={handleCloseModal}
      />
      <div className="flex flex-row justify-between items-center lg:my-5">
        <h1 className="text-lg font-bold my-3 mb-3">{event?.eventName}</h1>
        <button
          className="lg:block hidden py-2 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md border-indigo-300"
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

      <div className="lg:block hidden">
        {load == true
          ? ""
          : certificates.map((el, idx) => {
              return (
                <TemplateCertificateComponent
                  id={idx}
                  image_path={event.certificate.image.path}
                  title={event.certificate.title}
                  number={event.certificate.number}
                  author={event.certificate.author}
                  description={event.certificate.description}
                  date={event.certificate.date}
                  name={{
                    //   value: `${el[1][0]}
                    // ${el[1][1]}
                    // ${el[1][2]}
                    // ${el[1][3]}
                    // ${el[1][4]}
                    // ${el[1][5]}
                    // ${el[1][6]}
                    // ${el[1][7]}
                    // ${el[1][8]}
                    // ${el[1][9]}
                    // ${el[1][10]}
                    // ${el[1][11]}
                    // ${el[1][12]}
                    // ${el[1][13]}
                    // ${el[1][14]}
                    // ${el[1][15]}
                    // ${el[1][16]}
                    // ${el[1][17]}
                    // ${el[1][18]}
                    // ${el[1][19]}
                    // ${el[1][20]}`,
                    value: el[1],
                    class: event.certificate.name.class,
                  }}
                />
              );
            })}
      </div>
    </>
  );
}
