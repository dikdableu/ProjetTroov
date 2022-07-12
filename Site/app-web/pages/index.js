import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Ceci est la page principale</h1>
      <ul>
        <li>
          <Link href="/Login"><a>Login</a></Link>
        </li>
        <li>
          <Link href="/Home"><a>Accueil</a></Link>
        </li>
      </ul>
    </div>
  )
}
