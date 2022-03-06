import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CarPool</title>
        <meta name="description" content="Carpool analytics dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sidebar}></div>
      <header className={styles.header}></header>  
      <main className={styles.main}></main>

    </div>
  )
}
