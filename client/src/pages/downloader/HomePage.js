import { useContext, useEffect, useState } from "react";
import { CardHomeCount } from "src/components/CardComponent";
import { UserContext } from "src/context/UserContext";
import { CountServices } from "src/services/CountServices";

export function HomePage() {
  const { user, setUser } = useContext(UserContext);
  const [certificates, setCertificates] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const resCertificate = await CountServices.getCertificateByParameter(
      "email",
      user.email
    );

    setCertificates(resCertificate);
  };

  return (
    <>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-3">
        <CardHomeCount title="Total Sertifikat" value={certificates.length} />
      </div>
    </>
  );
}
