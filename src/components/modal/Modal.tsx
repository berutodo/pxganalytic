import { useEffect, useState } from "react";
import lista from '../../json/items/items.json';
import Image from "next/image";

interface PokemonData {
  sprites: {
    front_default: string;
  };
}

export function Modal({ x }: any) {
  const [sprites, setSprites] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = lista.find(e => e.name === x)?.pokemons;
      if (!pokemons || pokemons.length === 0) return;

      const spriteUrls: string[] = [];
      const spriteCache: Record<string, string> = {};

      // Check cache for previously fetched sprites
      for (const pokemon of pokemons) {
        if (spriteCache[pokemon.title]) {
          spriteUrls.push(spriteCache[pokemon.title]);
        }
      }

      // Fetch missing sprites
      const missingPokemons = pokemons.filter(pokemon => !spriteCache[pokemon.title]);
      const spritePromises = missingPokemons.map((pokemon) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.title.toLowerCase()}`)
          .then((response) => response.json())
          .then((data: PokemonData) => {
            const spriteUrl = data.sprites.front_default;
            spriteCache[pokemon.title] = spriteUrl; // Store in cache
            return spriteUrl;
          })
          .catch((error) => {
            console.log(`Error fetching data for ${pokemon.title}:`, error);
            return "";
          })
      );

      // Wait for all fetch requests to complete
      const spriteResults = await Promise.all(spritePromises);
      spriteUrls.push(...spriteResults);

      setSprites(spriteUrls);
    };

    fetchData();
  }, [x]);

  return (
    <div className="w-96 h-96 z-10 bg-[#FFF0F5]  flex flex-col justify-center items-center border-2 border-black rounded-lg mx-auto fixed">
      <p className="text-2xl">{x}</p>

      <div className="flex flex-row flex-wrap">
        {sprites.map((spriteUrl, index) => (
          <Image
            key={index}
            width={50}
            height={50}
            src={spriteUrl}
            alt={`Pokemon ${index}`}
            placeholder="blur" // Use a low-resolution placeholder
            blurDataURL="https://placehold.co/20x20" // Placeholder image URL
          />
        ))}
      </div>
    </div>
  );
}
