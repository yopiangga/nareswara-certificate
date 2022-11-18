import { useContext, useEffect, useState } from "react";
import {
  InputComponentDefault,
  InputComponentFile,
  InputComponentImage,
  InputComponentTextarea,
} from "../../components/InputComponent";
import { UserContext } from "../../context/UserContext";
import certificatePreview from "src/assets/images/certificate-preview.png";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";
import { TemplateCertificateComponent } from "src/components/TemplateCertificateComponent";
import { TemplateServices } from "src/services/TemplateServices";

export function CreateCertificateTemplatePage() {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);

  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  const [image, setImage] = useState();

  // const [data, setData] = useState({
  //   image_path: "",
  //   title: {
  //     value: "",
  //     class: "",
  //   },
  //   number: {
  //     value: "",
  //     class: "",
  //   },
  //   author: {
  //     value: "",
  //     class: "",
  //   },
  //   description: {
  //     value: "",
  //     class: "",
  //   },
  //   date: {
  //     value: "",
  //     class: "",
  //   },
  //   name: {
  //     value: "",
  //     class: "",
  //   },
  // });

  const [data, setData] = useState({
    image_path: "",
    title: {
      value: "Contoh Kompetisi",
      class:
        "bg-transparent left-10 w-72 bottom-10 absolute text-teal-900 text-left",
    },
    number: {
      value: "09/2022/RISTEK/BEM",
      class: "-",
    },
    author: {
      value: "RISTEK BEM PENS",
      class:
        "bg-transparent h-16 right-10 top-10 absolute text-right text-lg font-bold text-teal-900",
    },
    description: {
      value: "Sebagai peserta dalam ajang Kompetisi BEM 2022.",
      class:
        "bg-transparent h-32 left-44 right-44 top-72 mt-7 absolute flex justify-center items-center overflow-hidden font-normal text-sm text-teal-900 text-center",
    },
    date: {
      value: "2022-10-20",
      class: "-",
    },
    name: {
      value: "Alfian Prisma Yopiangga",
      class:
        "bg-transparent h-10 left-64 right-64 top-64 mt-5 absolute flex justify-center items-center font-black text-3xl text-teal-900 text-center",
    },
  });

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function handleFile(event) {
    setData({ ...data, image_path: event.target.files[0] });
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const templateServices = new TemplateServices();

    const resUrl = await templateServices.upload(data.image_path);
    const resName = `files/templates/${data.image_path.name}`;

    const res = await templateServices.add({
      image: {
        path: resUrl,
        name: resName,
      },
      title: data.title,
      number: data.number,
      author: data.author,
      description: data.description,
      date: data.date,
      name: data.name,
    });

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Template berhasil dibuat`,
    });
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    navigate("/template");
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
      <div className="lg:w-11/12 w-full lg:p-12 md:p-8 p-6 bg-white mt-5 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold">
          Hallo {user?.name} 👋<span className="font-normal"></span>
        </h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1">
            <div className="left">
              {image == null ? (
                ""
              ) : (
                <div className="">
                  <TemplateCertificateComponent
                    image_path={image}
                    title={data.title}
                    number={data.number}
                    author={data.author}
                    description={data.description}
                    date={data.date}
                    name={data.name}
                  />
                </div>
              )}

              <InputComponentImage
                id="file"
                title="Frame Template"
                onChange={handleFile}
                placeholder={`${
                  data.image_path == "" ? "Pilih file" : data.image_path.name
                }`}
              />

              <InputComponentDefault
                id="title-value"
                title="Nama Acara"
                type="text"
                onChange={(e) =>
                  setData(
                    {
                      ...data,
                      title: { ...data.title, value: e.target.value },
                    },
                    console.log(data)
                  )
                }
                placeholder="Nama acara"
                value={data.title.value}
                required={true}
              />

              <InputComponentDefault
                id="title-class"
                title="Style Nama Acara"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    title: { ...data.title, class: e.target.value },
                  })
                }
                placeholder="container text-lg font-bold"
                value={data.title.class}
                required={true}
              />

              <InputComponentTextarea
                id="description-value"
                title="Deskripsi Acara"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    description: { ...data.description, value: e.target.value },
                  })
                }
                placeholder="Deskripsi acara"
                value={data.description.value}
                rows={4}
                required={true}
              />

              <InputComponentDefault
                id="description-class"
                title="Style Deskripsi Acara"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    description: { ...data.description, class: e.target.value },
                  })
                }
                placeholder="container text-lg font-bold"
                value={data.description.class}
                required={true}
              />

              <InputComponentDefault
                id="author-value"
                title="Penyelenggara Acara"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    author: { ...data.author, value: e.target.value },
                  })
                }
                placeholder="BEM PENS 2022"
                value={data.author.value}
                required={true}
              />

              <InputComponentDefault
                id="author-class"
                title="Style Penyelenggara Acara"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    author: { ...data.author, class: e.target.value },
                  })
                }
                placeholder="container text-lg font-bold"
                value={data.author.class}
                required={true}
              />

              <InputComponentDefault
                id="number-value"
                title="Nomor Surat"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    number: { ...data.number, value: e.target.value },
                  })
                }
                placeholder="15/09/2022/BEM/PENS"
                value={data.number.value}
                required={true}
              />

              <InputComponentDefault
                id="number-class"
                title="Style Nomor Surat"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    number: { ...data.number, class: e.target.value },
                  })
                }
                placeholder="container text-lg font-bold"
                value={data.number.class}
                required={true}
              />

              <InputComponentDefault
                id="date-value"
                title="Tanggal Acara"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    date: { ...data.date, value: e.target.value },
                  })
                }
                placeholder="15 November 2022"
                value={data.date.value}
                required={true}
              />

              <InputComponentDefault
                id="date-class"
                title="Style Tanggal Acara"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    date: { ...data.date, class: e.target.value },
                  })
                }
                placeholder="container text-lg font-bold"
                value={data.date.class}
                required={true}
              />

              <InputComponentDefault
                id="name-value"
                title="Nama Penerima"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    name: { ...data.name, value: e.target.value },
                  })
                }
                placeholder="Alfian Prisma Yopiangga"
                value={data.name.value}
                required={true}
              />

              <InputComponentDefault
                id="number-class"
                title="Style Nomor Surat"
                type="text"
                onChange={(e) =>
                  setData({
                    ...data,
                    name: { ...data.name, class: e.target.value },
                  })
                }
                placeholder="container text-lg font-bold"
                value={data.name.class}
                required={true}
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-3 pl-5 pr-5 mr-2 mt-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md border-indigo-300"
          >
            Buat Template
          </button>
        </form>
      </div>
    </>
  );
}
