import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = await client.db("portfolio").collection("fans");
    await db.insertOne({ name: "Arham" });

    res.status(200).json({});
  } catch (e) {
    console.error(e);
  }
};
