export interface PokemonTypes {
    results: PType[]
}
export interface PType {
     name: string;
     url: string; 
     id: string;
}

export interface PokemonsByType {
    name: string;
    url: string; 
    id: number;
    pokemon: {
        pokemon:PType;
        slot:number;
    }[]
}

