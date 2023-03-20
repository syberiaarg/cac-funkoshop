import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/index.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from 'public/funkos-banner.png'



export default function Home() {
  return (
    <>
      <Head>
        <title>Funkoshop</title>
        <meta name="description" content="Collectible figures entertainment store." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Image className={styles.banner} src={Banner} height={388} alt='Funkos banner' />
        <main>
        </main>
        <Footer />
      </div>
    </>
  )
}
