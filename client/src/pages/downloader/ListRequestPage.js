import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardComponentDefault } from "src/components/CardComponent";
import {
  TableComponentDefault,
  TableComponentListRequestDownloader,
  TableComponentNewRequest,
} from "src/components/TableComponent";
import { UserContext } from "src/context/UserContext";
import { EventServices } from "src/services/EventServices";
import { RequestServices } from "src/services/RequestServices";

export function ListRequestPage() {
  const { user, setUser } = useContext(UserContext);
  const [requests, setRequests] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await RequestServices.getRequestByParameter(
      "email",
      user.email
    );
    var temp = [];

    for (let i = 0; i < res.length; i++) {
      temp.push([
        res[i].data.eventId,
        res[i].data.email,
        res[i].data.metaId,
        convertStatus(res[i].data.status),
        res[i].data.createdAt,
      ]);
    }

    setRequests(temp);
    setLoad(false);
  }

  function convertStatus(status) {
    switch (status) {
      case 0:
        return "Menunggu persetujuan";
        break;
      case 1:
        return "Telah disetujui";
        break;
      case 2:
        return "Ditolak";
        break;
    }
  }

  return (
    <>
      <h1 className="text-lg font-bold my-3 mb-3">
        Seluruh Permintaan, {user.name}
      </h1>
      {load ? (
        ""
      ) : (
        <TableComponentListRequestDownloader
          header={["ID Acara", "email", "meta id", "status", "tanggal"]}
          body={requests}
        />
      )}
    </>
  );
}
