export interface Lista {
  Item: string;
  Habilidade: string;
  'Tempo de espera': string;
  Materiais: Material[];
}

interface Material {
  quantity: number;
  name: string;
}
