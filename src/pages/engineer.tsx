import { Lista } from '@/components/lista'
import { Main } from '@/components/main'
import styles from '@/styles/Home.module.css'
import data from '../json/engineer/engineer.json'
export default function Estilista () {
    return(
        <main className={styles.main}>
            <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
        <h1>Engineer</h1>
          </div>
          <Main data={data}/>

        </main>
    )
}