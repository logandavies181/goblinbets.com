import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Goblinbets.com</title>
        <meta name="description" content="Stats from Flaccid King of Iron Fist" />
        <link rel="icon" href="/goblin.png" />
      </Head>

      <main className={styles.main}>
        Yoza
      </main>
    </div>
  )
}
