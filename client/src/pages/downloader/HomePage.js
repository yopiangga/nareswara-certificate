import { useContext, useEffect, useState } from "react";
import { CardHomeCount } from "src/components/CardComponent";
import { LoadingContext } from "src/context/LoadingContext";
import { UserContext } from "src/context/UserContext";
import { CountServices } from "src/services/CountServices";

export function HomePage() {
  const countServices = new CountServices();

  const { user, setUser } = useContext(UserContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const [certificates, setCertificates] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    setLoading(true);
    const resCertificate = await countServices.getAllCertificateByParticipant(
      user.email
    );

    setCertificates(resCertificate);
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 min-h-screen w-full">
        <CardHomeCount title="Total Sertifikat" value={certificates.length} />
      </div>
    </>
  );
}
