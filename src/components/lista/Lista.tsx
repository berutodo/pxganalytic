import data from '../../json/estilista/betterEstilista.json'
import { Lista } from './Lista.types'
import styles from '@/styles/Home.module.css'
export function Lista(){
    return(
        <>
        
        {data.map((e) => e.rankE.map((e: Lista, index) => (
                <tr key={index}>
                <td>{e['Item']}</td>
                <td>{e['Habilidade']}</td>
                <td>{e['Tempo de espera']}</td>
                <td>
                  {e['Materiais'].map((m, index) => (
                    <p key={index}>{m.quantity}, {m.name}</p>
                  ))}
                </td>
              </tr>
        )))}
        </>
    )
}

/*
{data.map((e,index) => (
        <tr className={styles.list} key={index}>
        <td>{ e.rankE.map(e => e['Item'])}</td>
        <td>{ e.rankE.map(e => e['Habilidade'])}</td>
        <td>{ e.rankE.map(e => e['Tempo de espera'])}</td>
        <td>{ e.rankE.map(e => e['Materiais'].map(e => <p>{e.quantity}, {e.name}</p>))}</td></tr>) )}


{data.map((e, index) => (
          <tr key={index}>
            <td>{e['Item']}</td>
            <td>{e['Habilidade']}</td>
            <td>{e['Tempo de espera']}</td>
            <td>
              {e['Materiais'].map((m, index) => (
                <p key={index}>{m.quantity}, {m.name}</p>
              ))}
            </td>
          </tr>
        ))}
        */