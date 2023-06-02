import { useEffect, useState } from "react";
import lista from '../../json/items/items.json'

export function Modal({ x }: any) {
  const [sprite, setSprite] = useState([])
  const pokemons = lista.find(e => e.name == x)?.pokemons
  useEffect(() => {
    const fetchData = async () => {
      pokemons?.forEach(pokemon => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.title.toLowerCase()}`)
          .then(response => response.json())
          .then(data => {
            const image_url = data.sprites.front_default
            setSprite(prevImages => [...prevImages, image_url])
          })
          .catch(error => {
            console.log(`Erro ao buscar o item ${pokemon.title}:`, error);
          });
      });
    }
    fetchData();
  },[])
  
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
  