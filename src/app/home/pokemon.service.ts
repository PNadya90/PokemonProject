import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../shared/pokemon.model';
import { PokemonsByType, PokemonTypes } from '../shared/pokemonType.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { 
  }
getPokemonTypes(){
  return this.http.get<PokemonTypes>('https://pokeapi.co/api/v2/type/');  
}
getPokemonsByType(typeId: string){  
  return this.http.get<PokemonsByType>('https://pokeapi.co/api/v2/type/'+typeId); 
}
getPokemonsById(pokemonId:string){
  return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/'+pokemonId);
}

}
