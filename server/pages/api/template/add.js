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
      image: req.body.image,
      title: req.body.title,
      number: req.body.number,
      author: req.body.author,
      description: req.body.description,
      date: req.body.date,
      name: req.body.name,
      createdAt: new Date(),
      updatedAt: null,
    };

    try {
      const result = await db.collection("templates").insertOne(data);

      return res.status(200).json({ message: "Berhasil submit", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
