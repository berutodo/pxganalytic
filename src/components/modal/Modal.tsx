import { useState } from "react";

export function Modal({ x }: any) {
    const [sprite, setSprite] = useState()
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => {
    setSprite( data.sprites.front_default);
  })
  .catch(error => {
    console.log('Ocorreu um erro:', error);
  });

    return (
      <div className="w-96 h-96  z-10 border-black flex flex-col justify-center items-center border-2 mx-auto fixed">
        <p className="text-2xl">{x}</p>
        <img src={sprite} alt="" />
      </div>
    );
  }
  