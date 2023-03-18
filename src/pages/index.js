import Head from 'next/head'
import { Main } from 'next/document'


export default function Home() {
  return (
    <>
      <Head>
        <title>Funkoshop</title>
        <meta name="description" content="Collectible figures entertainment store." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <header>
          TITLE + NAVBAR
        </header>
        <body>
          PRODUCTS DESCRIPTIONS // OFFERS
        </body>
        <footer>
          CONTACT INFORMATION // REST OF NAVBAR // MINIMAL LOGO
        </footer>
      </Main>
    </>
  )
}
