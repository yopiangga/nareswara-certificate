import { initDB } from "service/db";
import NextCors from "nextjs-cors";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = await initDB();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { id } = req.query;

  try {
    const data = await db
      .collection("certificates")
      .findOne({ _id: ObjectId(id) });
    return res.json(data);
  } catch (e) {
    return e;
  }
}
