import clientPromise from '../../lib/mongodb';


export default async function handler(req, res)
{

    const client = await clientPromise;
    const db = client.db("clubs");
    const collection = db.collection("clubsMain");


    let newClubs = await collection.find({}).toArray();

    for (let club of newClubs)
    {

        let score = 0;

        if (club.media.logo != null && !(club.media.logo === "" || Object.keys(club.media.logo).length === 0))
        {
            score += 2;
        }

        if (club.media.banner != null && !(club.media.banner === "" || Object.keys(club.media.banner).length === 0))
        {
            score += 2;
        }

        if (club.media.images)
        {
            for (let image of club.media.images)
            {
                if (!(image === "" || Object.keys(image).length === 0))
                {
                    score += 2;
                }
            }
        }


        if (club.shortDesc.length > 10)
        // at least 10 chars
        {
            score += 5;
        }

        if (club.longDesc.length > 10)
        {
            score += 5;
        }

        for (let item of club.faq)
        {
            score += 3;
        }

        await collection.updateOne(
            { _id: club._id },
            { $set: { score: score } }
        );

    }

    let verifyClubs = await collection.find({}).toArray();



    res.json(verifyClubs);  // send JSON data back to client
}