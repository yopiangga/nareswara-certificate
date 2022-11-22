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
import { TemplateServices } from "src/services/TemplateServices";
import { ModalConfirmationComponent } from "src/components/ModalInformationComponent";
import { TemplateCertificateComponent } from "src/components/TemplateCertificateComponent";

export function CreateCertificatePage() {
  const navigate = useNavigate();

  const templateServices = new TemplateServices();
  const eventServices = new EventServices();

  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);
  const { addEvent } = useContext(SmartContractContext);

  const [modalConfirmation, setModalConfirmation] = useState({
    status: false,
  });

  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);

  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  const [data, setData] = useState({
    title: "",
    description: "",
    certificate: {
      _id: "",
      image: {
        path: "",
        name: "",
      },
      title: {
        value: "",
        class: "",
      },
      number: {
        value: "",
        class: "",
      },
      author: {
        value: "",
        class: "",
      },
      description: {
        value: "",
        class: "",
      },
      date: {
        value: "",
        class: "",
      },
      name: {
        value: "",
        class: "",
      },
    },
  });

  // const [data, setData] = useState({
  //   title: "Kompetisi UI/UX BEM PENS",
  //   description:
  //     "Kompetisi yang diikuti oleh mahasiswa S1 sederajat seluruh Indonesia.",
  //   certificate: {
  //     _id: "6374885cb0d3b8569d140807",
  //     image: {
  //       path: "https://firebasestorage.googleapis.com/v0/b/nareswara-certificate.appspot.com/o/files%2Ftemplates%2F1.jpg?alt=media&token=2d94027c-f21c-48d8-ae23-6509f4061fce",
  //       name: "files/templates/1.jpg",
  //     },
  //     title: {
  //       value: "Contoh Kompetisi 2",
  //       class:
  //         "bg-transparent left-10 w-72 bottom-10 absolute text-teal-900 text-left",
  //     },
  //     number: {
  //       value: "09/2022/RISTEK/BEM",
  //       class: "-",
  //     },
  //     author: {
  //       value: "RISTEK BEM PENS",
  //       class:
  //         "bg-transparent h-16 right-10 top-10 absolute text-right text-lg font-bold text-teal-900",
  //     },
  //     description: {
  //       value: "Sebagai peserta dalam ajang Kompetisi BEM 2022.",
  //       class:
  //         "bg-transparent h-32 left-44 right-44 top-72 mt-7 absolute flex justify-center items-center overflow-hidden font-normal text-sm text-teal-900 text-center",
  //     },
  //     date: {
  //       value: "2022-10-20",
  //       class: "-",
  //     },
  //     name: {
  //       value: "Alfian Prisma Yopiangga",
  //       class:
  //         "bg-transparent h-10 left-64 right-64 top-64 mt-5 absolute flex justify-center items-center font-black text-3xl text-teal-900 text-center",
  //     },
  //   },
  // });

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    setLoading(true);
    const res = await templateServices.getAll();

    setTemplates(res);
    setLoading(false);
  }

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function handleChangeCertificate(id) {
    setData({
      ...data,
      certificate: {
        image: templates[id].image,
        title: {
          ...data.certificate.title,
          class: templates[id].title.class,
        },
        number: {
          ...data.certificate.number,
          class: templates[id].number.class,
        },
        author: {
          ...data.certificate.author,
          class: templates[id].author.class,
        },
        description: {
          ...data.certificate.description,
          class: templates[id].description.class,
        },
        date: {
          ...data.certificate.date,
          class: templates[id].date.class,
        },
        name: {
          ...data.certificate.name,
          class: templates[id].name.class,
        },
      },
    });
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
    setModalConfirmation({ status: false });
    setLoading(true);

    const res = await eventServices.add({
      title: data.title,
      description: data.description,
      certificate: data.certificate,
      user: user,
      participants: convertArrayToObject(values),
    });

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Acara "${data.title}" dengan ${values.length} data peserta berhasil dibuat`,
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

  const handleCloseModalConfirm = () => {
    setModalConfirmation({ status: false });
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

      <ModalConfirmationComponent
        status={modalConfirmation.status}
        title="Perhatikan!"
        content1="Silahkan cek terlebih dulu, Apakah data yang anda inputkan sudah benar ? Jika sudah benar lakukan klik kirimkan jika masih ada kesalahan klik batal dan silahkan ubah data terlebih dahulu"
        handleSubmit={handleSubmit}
        handleClose={handleCloseModalConfirm}
      />

      <div className="lg:w-11/12 w-full lg:p-12 md:p-8 p-6 bg-white mt-5 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold">
          Hallo {user?.name} 👋<span className="font-normal"></span>
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          {templates.map((el, idx) => {
            return (
              <img
                onClick={() => {
                  setSelectedTemplate(idx);
                  handleChangeCertificate(idx);
                }}
                className={`w-auto rounded-lg shadow-lg border-2 cursor-pointer ${
                  selectedTemplate == idx
                    ? "border-indigo-600"
                    : "border-transparent"
                }`}
                src={el.image.path}
                alt="event-image"
              />
            );
          })}
        </div>

        {/* <div className="mt-8 mb-2">
          <TemplateCertificateComponent
            image_path={templates[selectedTemplate].image.path}
            title={templates[selectedTemplate].title}
            number={templates[selectedTemplate].number}
            author={templates[selectedTemplate].author}
            description={templates[selectedTemplate].description}
            date={templates[selectedTemplate].date}
            name={templates[selectedTemplate].name}
          />
        </div> */}

        <form
          className="mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            setModalConfirmation({ status: true });
          }}
        >
          <div className="form grid grid-cols-1">
            <div className="left">
              <InputComponentDefault
                id="title"
                title="Nama Acara"
                type="text"
                onChange={handleChange}
                placeholder="Nama acara"
                value={data.title}
                required={true}
              />

              <InputComponentTextarea
                id="description"
                title="Deskripsi Acara"
                type="text"
                onChange={handleChange}
                placeholder="Deskripsi acara"
                value={data.description}
                rows={4}
                required={true}
              />

              <InputComponentDefault
                id="number"
                title="Nomor Sertifikat"
                type="text"
                onChange={(e) => {
                  setData({
                    ...data,
                    certificate: {
                      ...data.certificate,
                      number: {
                        ...data.certificate.number,
                        value: e.target.value,
                      },
                    },
                  });
                }}
                placeholder="/09/2022/RISTEK/BEM"
                value={data.certificate.number.value}
                required={true}
              />
              {/* <InputComponentDefault
                id="noCertificateStart"
                title="Nomor Dinamis"
                type="number"
                onChange={handleChange}
                placeholder="01"
                value={data.noCertificateStart}
                required={true}
              /> */}

              <InputComponentDefault
                id="titleCertificate"
                title="Judul Sertifikat"
                type="text"
                onChange={(e) => {
                  setData({
                    ...data,
                    certificate: {
                      ...data.certificate,
                      title: {
                        ...data.certificate.title,
                        value: e.target.value,
                      },
                    },
                  });
                }}
                placeholder="Kompetisi UI/UX BEM PENS 2022"
                value={data.certificate.title.value}
                required={true}
              />
              <InputComponentDefault
                id="authorCertificate"
                title="Penerbit"
                type="text"
                onChange={(e) => {
                  setData({
                    ...data,
                    certificate: {
                      ...data.certificate,
                      author: {
                        ...data.certificate.author,
                        value: e.target.value,
                      },
                    },
                  });
                }}
                placeholder="Kabinet Relevansi BEM PENS 2022"
                value={data.certificate.author.value}
                required={true}
              />
              <InputComponentDefault
                id="dateCertificate"
                title="Tanggal Terbit"
                type="date"
                onChange={(e) => {
                  setData({
                    ...data,
                    certificate: {
                      ...data.certificate,
                      date: {
                        ...data.certificate.date,
                        value: e.target.value,
                      },
                    },
                  });
                }}
                value={data.certificate.date.value}
                required={true}
              />
              <InputComponentTextarea
                id="descriptionCertificate"
                title="Deskripsi Sertifkat"
                type="text"
                onChange={(e) => {
                  setData({
                    ...data,
                    certificate: {
                      ...data.certificate,
                      description: {
                        ...data.certificate.description,
                        value: e.target.value,
                      },
                    },
                  });
                }}
                placeholder="Sebagai peserta dalam ajang Kompetisi UI/UX BEM PENS 2022."
                value={data.certificate.description.value}
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

          {/* <button
            type="button"
            onClick={handleSubmit}
            className="py-3 pl-5 pr-5 mr-2 mt-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md border-indigo-300"
          >
            Test Submit
          </button> */}
        </form>
      </div>
    </>
  );
}
