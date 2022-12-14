import { useContext, useEffect, useState } from "react";
import { UserServices } from "src/services/UserServices";
import {
  InputComponentDefault,
  InputComponentFile,
  InputComponentTextarea,
} from "../../components/InputComponent";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { LoadingContext } from "src/context/LoadingContext";

export function EditProfilePage() {
  const userServices = new UserServices();
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({
    name: "",
    address: "",
    metaId: "",
    photoPath: "",
  });
  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  useEffect(() => {
    fetch();
  }, []);

  function fetch() {
    setLoading(true);
    setData({
      name: user.name,
      address: user.address,
      metaId: user.metaId,
      photoPath: user.photoPath,
    });
    setLoading(false);
  }

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await userServices.update(user._id, data);
    setModalInformationLittle({
      status: true,
      description: `Profile "${user.name}" telah berhasil diperbarui`,
    });
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    navigate("/profile");
  };

  return (
    <>
      <ModalInformationLittle
        status={modalInformationLittle.status}
        title={modalInformationLittle.title}
        description={modalInformationLittle.description}
        handleClose={handleCloseModal}
      />
      <div className="lg:w-11/12 w-full lg:p-12 md:p-8 p-6 bg-white mt-5 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold">
          Hallo {user?.name} ????<span className="font-normal"></span>
        </h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1">
            <div className="left">
              <InputComponentDefault
                id="name"
                title="Nama Pengguna / Organisasi"
                type="text"
                onChange={handleChange}
                placeholder="Jone Doe"
                value={data.name}
                required={true}
              />
              <InputComponentDefault
                id="address"
                title="Alamat"
                type="text"
                onChange={handleChange}
                placeholder="Kampus Jl. Raya ITS, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111"
                value={data.address}
                required={true}
              />
              <InputComponentDefault
                id="metaId"
                title="Meta ID"
                type="text"
                onChange={handleChange}
                placeholder="0 xxx"
                value={data.meta_id}
                required={true}
              />
              <InputComponentDefault
                id="photoPath"
                title="Gambar Profile"
                type="text"
                onChange={handleChange}
                placeholder="https://yourprofile.com/photo.jpg"
                value={data.photo_path}
                required={true}
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-3 pl-5 pr-5 mr-2 mt-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md border-indigo-300"
          >
            Perbarui Profile
          </button>
        </form>
      </div>
    </>
  );
}
