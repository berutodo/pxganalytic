import { Lista } from './Lista.types'
import lista from '../../json/items/items.json'
export function Lista({data}: any){
    return(
        <>
        {data.map((e: any) => e.rankE.map((e: Lista, index: number) => (
                <div className='flex flex-row w-1/3 gap-4 h-32 items-center border-2 rounded-md' key={index}>
                  <h1>{e['Item']}</h1>
                  <h1>{e['Habilidade']}</h1>
                  <h1>{e['Tempo de espera']}</h1>
                  <div className='flex flex-row'>
                    {e['Materiais'].map((m, index) => (
                      <div className='flex flex-row items-baseline'>
                      <p key={index}>{m.quantity}</p>
                      <img alt={m.name} title={m.name} width={20} height={20} src={lista.find(obj => obj.name === m.name)?.src } />
                      </div>
                    ))}
                  </div>
              </div>
        )))}
        </>
    )
}