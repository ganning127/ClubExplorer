import { Heading } from '@chakra-ui/react';
import Head from 'next/head'
import clientPromise from '../lib/mongodb'
  
export const getServerSideProps = async () => {
    try {
      await clientPromise
      // `await clientPromise` will use the default database passed in the MONGODB_URI
      // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
      //
      // `const client = await clientPromise`
      // `const db = client.db("myDatabase")`
      //
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
  
      return {
        props: { isConnected: true },
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false },
      }
    }
  }
  
  export default function Home({
    isConnected,
  }) {
return (
    <div className="container">
      <Head>
        <title>GT Club Explorer Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          Georgia Tech Club Explorer
        </h1>
        
        <img src="idk yet" />

        <h2 className="button">Explore Clubs</h2>
        <h2 className="button">How it works</h2>
      </main>



      {/* <style jsx>{`

`     }</style>

      <style jsx global>{

      }</style> */}

    </div>
    )
  }