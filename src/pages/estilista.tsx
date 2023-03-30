import { Lista } from '@/components/lista'
import styles from '@/styles/Home.module.css'
import data from '../json/estilista/betterEstilista.json'
export default function Estilista () {
    return(
        <main className={styles.main}>
            <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
        <h1>Estilista</h1>
          </div>
          <Lista data={data}/>

        </main>
    )
}