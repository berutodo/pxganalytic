import { useEffect, useState } from "react";
import lista from '../../json/items/items.json'
interface PokemonData {
  sprites: {
    front_default: string;
    // Outras propriedades dos sprites, se houver
  };
  // Outras propriedades do Pokémon, se houver
}

export function Modal({ x }: any) {
  const [sprite, setSprite] = useState<string[]>([]);
  const pokemons = lista.find(e => e.name == x)?.pokemons
  useEffect(() => {
    const fetchData = async () => {
      if (sprite.length === 0) {
        const spritePromises = pokemons?.map((pokemon) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.title.toLowerCase()}`)
            .then((response) => response.json())
            .then((data: PokemonData) => data.sprites.front_default)
            .catch((error) => {
              console.log(`Erro ao buscar o item ${pokemon.title}:`, error);
              return ""; // Substituir o valor nulo por uma string vazia
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
      }
    };
    
    
    
  
    fetchData();
  }, [pokemons, sprite]); // Adiciona sprite como uma dependência do useEffect
  
  
    return (
      <div className="w-96 h-96  z-10 border-black flex flex-col justify-center items-center border-2 mx-auto fixed">
        <p className="text-2xl">{x}</p>
        {pokemons && pokemons.length > 1 && (
  <p>
    {pokemons[1].title}
  </p>
)}
  <div className="flex flex-row">
      {sprite.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Pokemon ${index}`} />
      ))}
    </div>

      </div>
    );
  }
  