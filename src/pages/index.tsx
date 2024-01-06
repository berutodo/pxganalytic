import Head from 'next/head'
import data from '../json/items/items.json'
import { Main } from '@/components/main'
import { useState } from 'react'

interface Pokemon {
  title: string;
  src: string;
}

interface Item {
  pokemons: Pokemon[];
  src: string;
  name: string;
}

export default function Home({data}: {data: Item[]}) {
  const [search, setSearch] = useState('')

  const handleInputChange = (e: any) => {
    setSearch(e.target.value)
  }

  const filteredData = search ? data.filter(item => {
    const itemName = item.name.toLowerCase();
    const searchValue = search.toLowerCase();
    return itemName.includes(searchValue);
  }) : [];
  return (
    <>
      <Head>
        <title>Naturia é Clan</title>
        <meta name="description" content="Guia de Items, craft e profissões não oficial da Pokexgames" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col gap-8 border-2 border-black justify-center'>
        <input className='w-2/4 self-center mt-20 p-2 border border-gray-300 rounded focus:outline-none'
          placeholder='Search Items'
          type="text"
          value={search}
          onChange={handleInputChange}
        />
        <div className='flex flex-row flex-wrap w-3/4 self-center'>
          {filteredData.map(item => (
            <div className='w-full md:w-1/2 p-4 flex flex-col items-center border-2 border-grey-200' key={item.name}>
              <div className='flex flex-col items-center border-b-2 mb-2'>
                <div><img src={item.src} alt={item.name} /></div>
                <p>{item.name}</p>
              </div>
              <ul className='flex flex-row gap-4 items-baseline'>
                {item.pokemons && Array.isArray(item.pokemons) ? (
                  item.pokemons.map(pokemon => (
                    <div className='flex flex-col items-center'>
                    <li><img width={32} height={32} src={`https://wiki.pokexgames.com${pokemon.src}`} alt="" /></li>
                    <li key={pokemon.title}>{pokemon.title}</li>
                    </div>
                  ))
                ) : (
                  <li>Este item pode ser dropado por uma grande variedade de pokemons.</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </main>
      
    </>
  )
}

export async function getStaticProps(){
  return{
    props: {data}
  }
}