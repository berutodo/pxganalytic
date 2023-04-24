import { Lista } from './Lista.types'
import lista from '../../json/items/items.json'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
export function Lista({data}: any){
    return(
        <>
        {data.map((e: any) => e.rankE.map((e: Lista, index: number) => (
                <div className='flex flex-row gap-4 h-32 items-center border-2 rounded-md' key={index}>
                  <td>{e['Item']}</td>
                  <td>{e['Habilidade']}</td>
                  <td>{e['Tempo de espera']}</td>
                  <div className='flex flex-row'>
                    {e['Materiais'].map((m, index) => (
                      <>
                      <p key={index}>{m.quantity},{m.name}</p>
                      <img width={20} height={20} src={lista.find(obj => obj.name === m.name)?.src } alt="" />
                      </>
                    ))}
                  </div>
              </div>
        )))}
        </>
    )
}