import clientPromise from '../../lib/mongodb';


export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db("clubs");
    const collection = db.collection("clubsMain"); 

    const skip = parseInt(req.query.skip); 
    const limit = parseInt(req.query.limit); 
    let newClubs = await collection.find({}).skip(skip).limit(limit).toArray();

    res.json(newClubs);  // send JSON data back to client
}

