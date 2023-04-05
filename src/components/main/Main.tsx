import Image from "next/image";
import styles from '@/styles/Home.module.css'
import { Lista } from "../lista";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export function Main ({data}: any) {
    return(
        <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skill</th>
              <th>Tempo</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
    <Lista data={data}/>
          </tbody>
        </table>



        <div className={styles.grid}>
          <a
            href="estilista"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Estilista <span>-&gt;</span>
            </h2>
        
          </a>

          <a
            href="engineer"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Engenheiro <span>-&gt;</span>
            </h2>
        
          </a>

          <a
            href="professor"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Professor <span>-&gt;</span>
            </h2>
       
          </a>

          <a
            href="adventurer"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Aventureiro <span>-&gt;</span>
            </h2>
          </a>
        </div>
      </main>
    )
}