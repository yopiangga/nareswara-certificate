import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardComponentDefault } from "src/components/CardComponent";
import { TableComponentDefault } from "src/components/TableComponent";
import { EventServices } from "src/services/EventServices";

export function ListCertificatePage() {
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

  return (
    <>
      <h1 className="text-lg font-bold my-3 mb-3">{event?.eventName}</h1>
      {load ? (
        ""
      ) : (
        <TableComponentDefault header={["email", "name"]} body={certificates} />
      )}
    </>
  );
}
