import { useContext, useEffect, useState } from "react";
import {
  InputComponentDefault,
  InputComponentFile,
  InputComponentTextarea,
} from "../../components/InputComponent";
import { UserContext } from "../../context/UserContext";
import Papa from "papaparse";
import { TableComponentDefault } from "../../components/TableComponent";
import certificatePreview from "src/assets/images/certificate-preview.png";
import { EventServices } from "src/services/EventServices";
import { SmartContractContext } from "src/context/SmartContractContext";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";

export function CreateCertificateTemplatePage() {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);
  const { addEvent } = useContext(SmartContractContext);

  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);

  const [data, setData] = useState({
    eventName: "",
    eventDescription: "",
    noCertificateStatic: "",
    noCertificateStart: "",
    titleCertificate: "",
    authorCertificate: "",
    dateCertificate: "",
    descriptionCertificate: "",
  });

  // const [data, setData] = useState({
  //   eventName: "Kompetisi UI/UX BEM PENS",
  //   eventDescription:
  //     "Kompetisi yang diikuti oleh mahasiswa S1 sederajat seluruh Indonesia.",
  //   noCertificateStatic: "09/2022/RISTEK/BEM",
  //   noCertificateStart: 1,
  //   titleCertificate: "UI/UX Competition BEM PENS 2022",
  //   authorCertificate: "RISTEK BEM PENS",
  //   dateCertificate: "-",
  //   descriptionCertificate:
  //     "Sebagai peserta dalam ajang Kompetisi UI/UX BEM PENS 2022.",
  // });

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        setParsedData(results.data);
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
      },
    });
  };

  function convertArrayToObject(array) {
    var object = [];

    for (let i = 0; i < array.length; i++) {
      object.push({
        name: array[i][0],
        email: array[i][1],
        metaId: array[i][2],
      });
    }

    return object;
  }

  function getEmailFromArray(array) {
    var object = [];
    for (let i = 0; i < array.length; i++) {
      object.push(array[i][1]);
    }
    return object;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const date = new Date();
    const time = date.getTime();

    await addEvent(data.eventName, getEmailFromArray(values));

    await EventServices.addEvent(
      `${time}-${user.email}`,
      data,
      user.email,
      convertArrayToObject(values)
    );

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Acara "${data.eventName}" dengan ${values.length} data peserta berhasil dibuat`,
    });
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    navigate("/acara");
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
      <div className="w-11/12 p-12 bg-white mt-5 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold">
          Hallo {user?.name} 👋<span className="font-normal"></span>
        </h1>
        <div className="w-96 mx-auto bg-gray-200 h-64 my-10">
          <img src={certificatePreview} />
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1">
            <div className="left mr-5">
              <InputComponentDefault
                id="eventName"
                title="Nama Acara"
                type="text"
                onChange={handleChange}
                placeholder="Nama acara"
                value={data.eventName}
                required={true}
              />

              <InputComponentTextarea
                id="eventDescription"
                title="Deskripsi Acara"
                type="text"
                onChange={handleChange}
                placeholder="Deskripsi acara"
                value={data.eventDescription}
                rows={4}
                required={true}
              />

              <InputComponentDefault
                id="noCertificateStatic"
                title="Nomor Sertifikat"
                type="text"
                onChange={handleChange}
                placeholder="/09/2022/RISTEK/BEM"
                value={data.noCertificateStatic}
                required={true}
              />
              <InputComponentDefault
                id="noCertificateStart"
                title="Nomor Dinamis"
                type="number"
                onChange={handleChange}
                placeholder="01"
                value={data.noCertificateStart}
                required={true}
              />

              <InputComponentDefault
                id="titleCertificate"
                title="Judul Sertifikat"
                type="text"
                onChange={handleChange}
                placeholder="Kompetisi UI/UX BEM PENS 2022"
                value={data.titleCertificate}
                required={true}
              />
              <InputComponentDefault
                id="authorCertificate"
                title="Penerbit"
                type="text"
                onChange={handleChange}
                placeholder="Kabinet Relevansi BEM PENS 2022"
                value={data.authorCertificate}
                required={true}
              />
              <InputComponentDefault
                id="dateCertificate"
                title="Tanggal Terbit"
                type="date"
                onChange={handleChange}
                value={data.dateCertificate}
                required={true}
              />
              <InputComponentTextarea
                id="descriptionCertificate"
                title="Deskripsi Sertifkat"
                type="text"
                onChange={handleChange}
                placeholder="Sebagai peserta dalam ajang Kompetisi UI/UX BEM PENS 2022."
                value={data.descriptionCertificate}
                rows={4}
                required={true}
              />

              <InputComponentFile
                id="file"
                title="Nama Penerima"
                onChange={changeHandler}
                placeholder="Unggah File CSV"
              />

              <TableComponentDefault header={tableRows} body={values} />
            </div>
          </div>
          <button
            type="submit"
            className="py-3 pl-5 pr-5 mr-2 mt-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md border-indigo-300"
          >
            Buat Sertifikat
          </button>
        </form>
      </div>
    </>
  );
}
