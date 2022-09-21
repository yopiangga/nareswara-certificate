import { create } from "ipfs-http-client";

const projectId = "2F4sZAjTdRQ52qxcUevvuiZgum9";
const projectSecret = "129af34fdb131416578631000514bf72";
const auth = "Basic " + btoa(projectId + ":" + projectSecret);

const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export default ipfs;
