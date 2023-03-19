import Head from 'next/head'
import React from 'react'
import Header from './components/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Funkoshop</title>
        <meta name="description" content="Collectible figures entertainment store." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <footer>
      </footer>
    </>
  )
}
