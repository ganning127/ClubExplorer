import clientPromise from '../../lib/mongodb';


export default async function handler(req, res)
{

    const client = await clientPromise;
    const db = client.db("clubs");
    const collection = db.collection("clubsMain");

    const value = req.headers.value;

    try
    {
        let results = await collection.aggregate([
            {
                $search: {
                    "index": "ClubSearch",
                    "text": {
                        "query": `${value}`,
                        "path": ["name", "tags", "shortDesc", "longDesc"],
                        "fuzzy": {
                            "maxEdits": 2,
                            "prefixLength": 3
                        }
                    }
                }
            }
        ]).toArray();
        console.log(results);
        res.json(results);  // send data back to client as JSON 
    } catch (e)
    {
        res.status(500).json({ error: "an error occurred" });
    }


    // let newClubs = await collection.find({
    //     name: { $eq: value }
    // }).toArray();

    // res.json(newClubs);  // send JSON data back to client
}