import { useRouter } from 'next/router';
import clientPromise from '../../lib/mongodb';

export default function Page({ data })
{
    const router = useRouter();
    console.log(data);
    return <p>Post: {router.query.slug}</p>;
}

export async function getServerSideProps(context)
{
    try
    {
        const slug = context.query.slug;
        const client = await clientPromise;
        const db = client.db("clubs");
        const collection = db.collection("clubsMain");

        let res = await collection.find({ slug: slug }).limit(1).toArray();
        res = JSON.parse(JSON.stringify(res))[0];

        return {
            props: {
                success: true,
                data: res
            }
        };
    } catch (e)
    {
        console.error(e);
        return {
            props: {
                success: false,
                data: null
            }
        };
    }

}