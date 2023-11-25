import clientPromise from "../../lib/mongodb";

export default async function AddClubToMongo(req, res) {
  try {
    const clubData = req.body;
    
    const client = await clientPromise;
    const db = client.db("clubs");
    const collection = db.collection("clubsMain");

    const result = await collection.insertOne(clubData);

    if (result.acknowledged) {
      console.log("Club added successfully:", result);
      res.status(200).json({ success: true, result });
    } else {
      console.error("Club insertion not acknowledged");
      res.status(500).json({ success: false });
    }
  } catch (error) {
    console.error('An error occurred while adding the club to MongoDB:', error);
    res.status(404).json({ success: false, error: error.message });
  }
}
