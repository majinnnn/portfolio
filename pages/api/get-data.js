import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const { name } = req.query;
    const client = await clientPromise;
    const db = await client.db("portfolio").collection("fans");
    // const data = await db.find(name ? { name } : { }).toArray();
    // const data = await db.find().sort({ timestampField: -1 }).limit(5).toArray(); /* to get the most recent 5 entries */
    const data = await db
      .find(name ? { name } : {})
      .limit(5)
      .toArray();

    const rec = data[0];
    console.log(data);
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
  }
};
