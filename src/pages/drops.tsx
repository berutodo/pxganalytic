import { createClient } from '@supabase/supabase-js'
import Image from 'next/image';

interface PokemonData {
  name: string,
  src: string,
  drops: Drops[]
  types: string[]
}
interface Drops {
  name: string,
  rate: number
}

interface Item {
  name: string,
  src: string,
  width: number,
  height: number
}
interface Colors {
  [key: string]: string;
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
  const newData = data;
  return {
      props: {
          newData,
          itemsData,
      },
  };
};

export default function Drops({newData, itemsData}: {newData: PokemonData[], itemsData: Item[]}){
      const colors: Colors = {
        'poison': "#ab6bc9",
        'normal': "#9198a1",
        'fighting': "#cf4169",
        'flying': "#8fa9dc",
        'ground': "#d97647",
        'rock': "#c6b68b",
        'bug': "#90c02d",
        'ghost': "#5368ac",
        'steel': "#5a8ea1",
        'fire': "#ff9c54",
        'water': "#4c90d4",
        'grass': "#63bb5b",
        'electric': "#f3d23b",
        'psychic': "#f97077",
        'ice': "#74cec0",
        'dragon': "#0b6dc5",
        'dark': "#5a5267",
        'fairy': "#ed8fe7"
    };
    return (
        <div>
        <div className="flex p-20 flex-wrap md:w-4/5 mx-auto justify-center gap-4 font-WorkSans">
        {newData.map(pokemon => 
          <div key={pokemon.name} className="flex flex-col w-80 items-center justify-between rounded-md border-2 border-black p-4">
            <div className='w-full flex flex-col items-center'>
            <div className='flex w-full p-2 bg-cyan-50 justify-between'>
              <h1>{pokemon.name}</h1>
              <div className='flex gap-2'>
              {pokemon.types.map(e => {
                const cor = colors[e]
                return(
                  <div style={{ backgroundColor: cor }} className="rounded-3xl p-1">
                    <Image alt={e} width={16} height={16} src={`/pokemonTypes/${e}.svg`} />
                  </div>
                )
              })}
              </div>
            </div>
          <div className='relative w-[96px] h-[96px]'><Image fill src={pokemon.src} alt={pokemon.name} /></div>
            </div>
            
          <div className="w-full">
          {pokemon.drops.map(drop => {
            const image = itemsData.find(item => item.name === drop.name)
            const width = image?.width
            const height = image?.height
            const src = image ? image.src : "";

            return (
              <div key={drop.name} className="flex p-2 items-center justify-between border-b-2 border-gray-300">
                <div className="flex items-center gap-2">
                  <div className="flex justify-center"><Image width={width} height={height} src={src} alt={drop.name} /></div>
                  <div>
                    <h1 className='text-sm md:text-base'>{drop.name}</h1>
                  </div>
                </div>
                <div className="flex">
                  {drop.rate === 0 ? <h1 className="font-bold text-orange-500">RARE</h1> : drop.rate + " %"}
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
