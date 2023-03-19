import Head from 'next/head'
import { Main } from 'next/document'
import React from 'react'


export default function Home() {
  return (
    <>
      <Head>
        <title>Funkoshop</title>
        <meta name="description" content="Collectible figures entertainment store." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div>TITLE + NAVBAR + FUNKOLOGO</div>
      </header>
      <body>
        <div>PRODUCTS DESCRIPTIONS // OFFERS</div>
      </body>
      <footer>
        <div>CONTACT INFORMATION // REST OF NAVBAR // MINIMAL LOGO</div>
      </footer>
    </>
  )
}
