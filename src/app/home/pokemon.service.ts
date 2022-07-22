import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
getPokemonsByType(typeId: String){  
  return this.http.get<PokemonsByType>('https://pokeapi.co/api/v2/type/'+typeId); 
}

}
