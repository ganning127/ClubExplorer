import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db("clubs");
    const collection = db.collection("clubsMain"); 

    const searchTerm = req.query.searchTerm; 
    const skip = parseInt(req.query.skip, 10); 
    const limit = parseInt(req.query.limit, 10); 

    try {
        let results = await collection.aggregate([
            {
                $search: {
                    "index": "ClubSearch", 
                    "text": {
                        "query": `${searchTerm}`,
                        "path": ["name", "tags", "shortDesc", "longDesc"],
                        "fuzzy": {
                        "maxEdits": 2,
                        "prefixLength": 3
                        }
                    }
                }
            }, 
            {
                $skip: skip * limit
            }, 
            {
                $limit: limit
            }
        ]).toArray(); 
        console.log(results); 
        res.json(results);  // send data back to client as JSON 

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "an error occurred" });
    }
}
