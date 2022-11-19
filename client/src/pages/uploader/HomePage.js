import { useContext, useEffect, useState } from "react";
import { CardHomeCount } from "src/components/CardComponent";
import { LoadingContext } from "src/context/LoadingContext";
import { SmartContractContext } from "src/context/SmartContractContext";
import { UserContext } from "src/context/UserContext";
import { CountServices } from "src/services/CountServices";

export function HomePage() {
  const countServices = new CountServices();

  const { user, setUser } = useContext(UserContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { getAllCertificates } = useContext(SmartContractContext);
  const [certificates, setCertificates] = useState([]);
  const [events, setEvents] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    setLoading(true);
    const resEvent = await countServices.getAllEventByAuthor(user.email);
    const resCertificate = await countServices.getAllCertificateByAuthor(
      user.email
    );

    setCertificates(resCertificate);
    setEvents(resEvent);
    setLoading(false);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 min-h-screen w-full">
        <CardHomeCount title="Total Acara" value={events.length} />
        <CardHomeCount title="Total Sertifikat" value={certificates.length} />
        {/* <CardHomeCount title="Total Peserta Acara" value={5} /> */}
      </div>
    </div>
  );
}
