import { useContext, useEffect, useState } from "react";
import {
  CardComponentCertificateDownload,
  CardComponentDefault,
} from "src/components/CardComponent";
import { UserContext } from "src/context/UserContext";
import { CertificateServices } from "src/services/CertificateServices";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";

export function ListCertificatePage() {
  const certificateServices = new CertificateServices();
  const { user, setUser } = useContext(UserContext);
  const [certificates, setCertificates] = useState([]);
  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  useEffect(() => {
    getCertificates();
  }, []);

  async function getCertificates() {
    const res = await certificateServices.getAllCertificateByParticipant(
      user.email
    );
    setCertificates(res);
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
  };

  return (
    <>
      <ModalInformationLittle
        status={modalInformationLittle.status}
        title={modalInformationLittle.title}
        description={modalInformationLittle.description}
        handleClose={handleCloseModal}
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-4 ">
        {certificates.map((el, idx) => {
          return (
            <CardComponentCertificateDownload
              key={idx}
              data={el}
              callback={(data) => {
                setModalInformationLittle({
                  status: true,
                  description: `Data "${data}" berhasil di salin`,
                });
              }}
            />
          );
        })}
      </div>
    </>
  );
}
