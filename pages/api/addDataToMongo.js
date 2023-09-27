import clientPromise from "../../lib/mongodb"
import jsonData from "../../lib/clubData.json"

export default async function handler(req, res) {
    try {
      // `await clientPromise` will use the default database passed in the MONGODB_URI
      // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
      //
      // `const client = await clientPromise`
      // `const db = client.db("myDatabase")`
      //
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
  
      const client = await clientPromise;
      const db = client.db("clubs");
      const collection = db.collection("clubsMain");

      const numToInsert = 100;

      let insertArr = [];
      
      for (let i = 0; i < numToInsert; i++) {
        insertArr.push({...jsonData[0]}); // can't have duplicates; mongodb uses identity to determine index
      }

      const result = await collection.insertMany(insertArr);

      // clearAllData(collection);
      if (result.acknowledged) {
        res.status(200).json({ success: true, result });
      } else {
        res.status(500).json({ success: false });
      }

    } catch (e) {
      console.log(e);
      res.status(200).json({ msg: e });
    }
  }


async function clearAllData(collection) {
  await collection.deleteMany({});
}