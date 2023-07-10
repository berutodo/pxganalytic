export interface Lista {
  Item: string;
  Habilidade: string;
  src: string;
  'Tempo de espera': string;
  Materiais: Material[];
}

interface Material {
  quantity: number;
  name: string;
}

export interface PokemonData {
  pokemons: {
    title: string;
    src: string;
  }[];
  src: string;
  name: string;
}
