import type { NextPage } from 'next'
import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'

const Home: NextPage = () => {
  const {user, error, isLoading} = useUser()

  //Render; most of defualt code was removed and saved to a backup file
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  if (user){
    return(
    <div>
      Welcome {user.name}! <a href="api/auth/logout">Logout</a>
    </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    
      <Link href="/api/auth/login">Login</Link>;

    </div>
  )
}

export default Home
