import { Lista } from './Lista.types'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
export function Lista({data}: any){
  const [useItem, setItem] = useState("")
    return(
        <>
        {data.map((e: any) => e.rankE.map((e: Lista, index: number) => (
                <tr className={styles.list} key={index}>
                <td>{e['Item']}</td>
                <td>{e['Habilidade']}</td>
                <td>{e['Tempo de espera']}</td>
                <td >
                {useItem && <p>{useItem}</p>}
                  {e['Materiais'].map((m, index) => (
                    <>
                    <p key={index}>{m.quantity}, {m.name}</p>
                    </>
                  ))}
                </td>
              </tr>
        )))}
        </>
    )
}