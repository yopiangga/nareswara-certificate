import { useContext, useEffect, useState } from "react";
import { CardHomeCount } from "src/components/CardComponent";
import { UserContext } from "src/context/UserContext";
import { CertificateServices } from "src/services/CertificateServices";
import { EventServices } from "src/services/EventServices";

export function HomePage() {
  const { user, setUser } = useContext(UserContext);
  const [certificates, setCertificates] = useState([]);
  const [events, setEvents] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    CertificateServices.getCertificateByParameter("emailAuthor", user.email)
      .then(async (resCertificate) => {
        setCertificates(resCertificate);
        EventServices.getCertificateByParameter("email", user.email)
          .then((resEvent) => {
            setEvents(resEvent);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    setLoad(false);
  }

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
