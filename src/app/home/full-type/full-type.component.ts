import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { take } from 'rxjs';
import { PType } from 'src/app/shared/pokemonType.model';
import { ToolsService } from 'src/app/shared/tools.service';
import { Pokemon } from 'src/app/shared/pokemon.model';
@Component({
  selector: 'app-full-type',
  templateUrl: './full-type.component.html',
  styleUrls: ['./full-type.component.scss']
})
export class FullTypeComponent implements OnInit {
  id: string;
  countPokemons = 20;
  maxLenghOfGroup=0;
  pokemonList: Pokemon[];
  allPokemonsList: PType[];
  typeName: string;
  constructor(private route: ActivatedRoute, private pokemonSrv: PokemonService, private toolSrv: ToolsService) { }

  ngOnInit(): void {
    let paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.pokemonSrv.getPokemonsByType(paramId).pipe(take(1)).subscribe(res => {
        let pokemonsIdsAndNames: PType[] = res.pokemon.map((el) => {
          el.pokemon.id = this.toolSrv.extratId(el.pokemon.url);
          this.typeName = res.name;
          return el.pokemon;
        })
        if (pokemonsIdsAndNames && pokemonsIdsAndNames.length > 0) {
          this.allPokemonsList = pokemonsIdsAndNames;
          this.pokemonList = [];
          this.getPokemons(0, this.countPokemons)
        }

      })
    }
  }

  getPokemons(offset: number, limit: number) {
    this.maxLenghOfGroup = Math.min(limit, this.allPokemonsList.length);
    for (let i = offset; i <this.maxLenghOfGroup; ++i) {
      {
        let pokemon = this.allPokemonsList[i];
        this.pokemonSrv.getPokemonsById(pokemon.id).pipe(take(1)).subscribe(
          res => {
            this.pokemonList.push(res);
          }
        )
      }
    }
  }
  showMore() {
    this.getPokemons(this.countPokemons,this.countPokemons += 20)
  }

}
