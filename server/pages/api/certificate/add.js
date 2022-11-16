import { initDB } from "service/db";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  const db = await initDB();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "POST") {
    const data = {
      title: req.body.title,
      participant: req.body.participant,
      author: req.body.author,
      title: req.body.title,
      date: req.body.date,
      link: req.body.link,
      createdAt: new Date(),
      updatedAt: null,
    };

    try {
      const result = await db.collection("certificates").insertOne(data);

      return res.status(200).json({ message: "Berhasil submit", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
