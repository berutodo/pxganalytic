import { useEffect, useState } from "react";
import lista from '../../json/items/items.json'

interface PokemonData {
  sprites: {
    front_default: string;
  };
}

export function Modal({ x }: any) {
  const [sprite, setSprite] = useState<string[]>([]);
  const pokemons = lista.find(e => e.name == x)?.pokemons;

  useEffect(() => {
    const fetchData = async () => {
      const spritePromises = pokemons?.map((pokemon) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.title.toLowerCase()}`)
          .then((response) => response.json())
          .then((data: PokemonData) => data.sprites.front_default)
          .catch((error) => {
            console.log(`Erro ao buscar o item ${pokemon.title}:`, error);
            return "";
          })
      );

      const spriteResults = await Promise.allSettled(spritePromises ?? []);
      const tempSpriteArray: string[] = [];
      spriteResults.forEach((result) => {
        if (result.status === "fulfilled" && result.value !== null) {
          tempSpriteArray.push(result.value);
        }
      });
      setSprite(tempSpriteArray);
    };

    if (pokemons && pokemons.length > 0) {
      fetchData();
    }
  }, [pokemons]);

  return (
    <div className="w-96 h-96 z-10 bg-[#FFF0F5]  flex flex-col justify-center items-center border-2 border-black rounded-lg mx-auto fixed">
      <p className="text-2xl">{x}</p>
      
      {sprite.length > 0 && (
        <div className="flex flex-row flex-wrap">
          {sprite.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Pokemon ${index}`} />
          ))}
        </div>
      )}
    </div>
  );
}
