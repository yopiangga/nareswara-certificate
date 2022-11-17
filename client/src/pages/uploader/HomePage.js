import { useContext, useEffect, useState } from "react";
import { CardHomeCount } from "src/components/CardComponent";
import { SmartContractContext } from "src/context/SmartContractContext";
import { UserContext } from "src/context/UserContext";
import { CountServices } from "src/services/CountServices";

export function HomePage() {
  const countServices = new CountServices();

  const { user, setUser } = useContext(UserContext);
  const { getAllCertificates } = useContext(SmartContractContext);
  const [certificates, setCertificates] = useState([]);
  const [events, setEvents] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const resCertificate = await countServices.getAllEventByAuthor(user.email);
    const resEvent = await countServices.getAllCertificateByAuthor(user.email);

    setCertificates(resCertificate);
    setEvents(resEvent);
  };

  return (
    <>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-3">
        <CardHomeCount title="Total Acara" value={events.length} />
        <CardHomeCount title="Total Sertifikat" value={certificates.length} />
        {/* <CardHomeCount title="Total Peserta Acara" value={5} /> */}
      </div>
    </>
  );
}
