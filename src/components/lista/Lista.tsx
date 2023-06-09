import { Lista, PokemonData } from './Lista.types'
import lista from '../../json/items/items.json'
import { Modal } from '../modal'
import Image from 'next/image'
import { useState } from 'react'

export function Lista({data, searchData}: any){
  const [statusModal, setStatusModal] = useState(false)
  const [searchedItem, setSearchedItem] = useState("")

  function handleClick (x: string) {
    setSearchedItem(x)
    console.log(statusModal)
    setStatusModal(true)
  }
  const handleOutsideClick = () => {
    setStatusModal(false);
  };
    return(
        <>
        <div onClick={handleOutsideClick} className='relative w-full flex flex-row justify-center'>
        {statusModal && <Modal x={searchedItem} />}
        </div>
        {data.map((e: any) => e.rankS.map((e: Lista, index: number) => (
                <div className='flex flex-row p-4 justify-around shadow-sm cursor-pointer w-11/12 sm:w-1/3 h-32 items-center border-2 rounded-md relative' key={index}>
                  <div>
                  <Image className='min-w-max h-auto' alt={e['Item']} sizes='100vw' width={0} height={0} src={`https://wiki.pokexgames.com${e.src}`}/>
                  <h1>{e['Item']}</h1>
                  </div>
                  <h1 className='top-1 right-1 absolute'>{e['Habilidade']}</h1>
                  <h1 className='bottom-1 right-1 absolute'>{e['Tempo de espera']}</h1>
                  <div className='flex flex-row flex-wrap gap-4'>
                    {e['Materiais'].map((m, index) => (
                      <div key={index} onClick={() => handleClick(m.name)} className='flex min-w-min flex-row items-baseline'>
                      <p>{m.quantity}</p>
                      <Image className='w-full h-auto' alt={m.name} title={m.name} sizes='100vw' width={0} height={0} src={lista.find((obj) => obj.name === m.name)?.src ?? ""} />
                      </div>
                    ))}
                  </div>
              </div>
        )))}
        </>
    )
}