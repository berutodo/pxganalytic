import { useEffect, useState } from "react";
import lista from '../../json/items/items.json'

export function Modal({ x }: any) {
  const [sprite, setSprite] = useState([])
  const pokemons = lista.find(e => e.name == x)?.pokemons
  useEffect(() => {
    const fetchData = async () => {
      if (sprite.length === 0) { // Verifica se já existem imagens no estado sprite
        const spritePromises = pokemons?.map((pokemon) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.title.toLowerCase()}`)
            .then((response) => response.json())
            .then((data) => data.sprites.front_default)
            .catch((error) => {
              console.log(`Erro ao buscar o item ${pokemon.title}:`, error);
              return null; // Trata o erro e retorna um valor padrão
            })
        );
  
        const spriteResults = await Promise.all(spritePromises);
        setSprite(spriteResults.filter((sprite) => sprite !== null));
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
  