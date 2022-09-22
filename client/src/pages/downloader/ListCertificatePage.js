import { useContext, useEffect, useState } from "react";
import {
  CardComponentCertificateDownload,
  CardComponentDefault,
} from "src/components/CardComponent";
import { UserContext } from "src/context/UserContext";
import { CertificateServices } from "src/services/CertificateServices";

export function ListCertificatePage() {
  const { user, setUser } = useContext(UserContext);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    getCertificates();
  }, []);

  async function getCertificates() {
    const res = await CertificateServices.getCertificateByParameter(
      "email",
      user.email
    );
    setCertificates(res);
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {certificates.map((el, idx) => {
          return <CardComponentCertificateDownload key={idx} data={el} />;
        })}
      </div>
    </>
  );
}
