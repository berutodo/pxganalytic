import { createClient } from '@supabase/supabase-js'
import Image from 'next/image';

interface PokemonData {
  name: string,
  src: string,
  drops: Drops[]

}
interface Drops {
  name: string,
  rate: number
}

interface Item {
  name: string,
  src: string
}

export const getStaticProps = async () => {
  const supabase = createClient(`${process.env.DB_URL}`, `${process.env.DB_KEY}`)

  const { data, error } = await supabase.from('pokemons').select("*");
  if (error) {
      console.error('Error fetching data:', error.message);
      return {
          notFound: true,
      };
  }
  const { data: itemsDataResponse, error: itemsError } = await supabase.from("items").select("*");
  if (itemsError) {
      console.error('Error fetching items data:', itemsError.message);
  }

  
  const itemsData = itemsDataResponse
  const newData = data.map(e => JSON.parse(e.drops));
  return {
      props: {
          newData,
          itemsData,
      },
  };
};

export default function Drops({newData, itemsData}: {newData: PokemonData[], itemsData: Item[]}){

    return (
        <div>
        <div className="flex p-20 flex-wrap w-4/5 mx-auto justify-center gap-4 font-WorkSans">
        {newData.map(pokemon => 
          <div key={pokemon.name} className="flex flex-col w-80 items-center justify-center gap-14 rounded-md border-2 border-black p-6">
          <div className='relative w-[96px] h-[96px]'><Image fill src={pokemon.src} alt={pokemon.name} /></div>
          <div className="w-full">
          {pokemon.drops.map(drop => {
            const image = itemsData.find(item => item.name === drop.name)
            const src = image ? image.src : "";

            return (
              <div key={drop.name} className="flex p-2 items-center justify-between border-b-2 border-gray-300">
                <div className="flex items-center gap-2">
                  <div className="relative w-4 h-5 flex justify-center"><Image fill={true} src={src} alt={drop.name} /></div>
                  <div>
                    <h1>{drop.name}</h1>
                  </div>
                </div>
                <div className="flex">
                  {drop.rate === 0 ? <h1 className="font-medium text-orange-500">RARE</h1> : drop.rate + " %"}
                </div>
              </div>
            );
})}
            
        </div>
          </div>    
            )}
            </div>          
              </div>
    )
}
