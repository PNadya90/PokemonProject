import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { PType } from 'src/app/shared/pokemonType.model';
import { PokemonService } from '../pokemon.service';
import { UserAccountService } from './user-account.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  listPokemon:Pokemon[]=[];
  allPokemonsList:PType[]=[];
  countPokemons:number=20;
  constructor(private userSrv:UserAccountService, private pokemonSrv: PokemonService) { }

  ngOnInit(): void {
   let currentUser=this.userSrv.$currentUser.getValue();
        if (currentUser?.cartList && currentUser.cartList.length > 0) {
          this.allPokemonsList = currentUser.cartList;
          this.listPokemon = [];
          this.getPokemons(0, this.countPokemons)
        } 
  }

  getPokemons(offset: number, limit: number) {
    let maxLenghOfGroup = Math.min(limit, this.allPokemonsList.length);
    for (let i = offset; i < maxLenghOfGroup; ++i) {
      {
        let pokemon = this.allPokemonsList[i];
        this.pokemonSrv.getPokemonsById(pokemon.id).pipe(take(1)).subscribe(
          res => {
            this.listPokemon.push(res);
          }
        )
      }
    }
  }
  showMore() {
    this.getPokemons(this.countPokemons,this.countPokemons += 20)
  }
}
