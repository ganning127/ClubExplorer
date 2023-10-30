import Head from 'next/head';
import NavBar from "../components/NavBar";
import React, { useState, useEffect} from "react";

export default function Home() {
    return (
        <>
          <Head>
            <title>GT Club Explorer Add Club Submitted</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <NavBar />

          <h> hello mf </h>
        </>
    );
}