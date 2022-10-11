export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: {
    name: string;
    id: number;
  };
  location: {
    name: string;
    id: number;
  };
  image: string;
}
