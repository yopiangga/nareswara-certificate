import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardComponentDefault } from "src/components/CardComponent";
import {
  TableComponentDefault,
  TableComponentNewRequest,
} from "src/components/TableComponent";
import { UserContext } from "src/context/UserContext";
import { EventServices } from "src/services/_EventServices";
import { RequestServices } from "src/services/RequestServices";

export function ListCertificateByEventPage() {
  const { user, setUser } = useContext(UserContext);
  const [event, setEvent] = useState();
  const [certificates, setCertificates] = useState([]);
  const location = useLocation();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await EventServices.getEvent(location.pathname.split("/")[2]);

    var temp = [];

    for (let i = 0; i < res.certificates.length; i++) {
      temp.push([res.certificates[i].email, res.certificates[i].name]);
    }

    setEvent(res);
    setCertificates(temp);
    setLoad(false);
  }

  async function handleRequest() {
    const date = new Date();
    const time = date.getTime();

    const res = await RequestServices.addRequest(`${time}-${user.email}`, {
      metaId: user.metaId,
      email: user.email,
      eventId: location.pathname.split("/")[2],
      status: 0,
      createdAt: time,
    });
  }

  return (
    <>
      <h1 className="text-lg font-bold my-3 mb-3">{event?.eventName}</h1>
      {load ? (
        ""
      ) : (
        <TableComponentNewRequest
          header={["email", "nama", "aksi"]}
          body={certificates}
          request={handleRequest}
        />
      )}
    </>
  );
}
