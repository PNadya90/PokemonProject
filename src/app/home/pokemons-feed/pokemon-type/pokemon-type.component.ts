import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { PType } from 'src/app/shared/pokemonType.model';
import { ToolsService } from 'src/app/shared/tools.service';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent implements OnInit {
  @Input() typeId: string;
  pokemonList: Pokemon[];
  @Input()
  typeName: string;
  readonly MAX_OF_GROUP = 6;
  constructor(private router: Router, private pokemonSrv: PokemonService, private toolSrv:ToolsService) {

  }

  ngOnInit(): void {
    this.pokemonSrv.getPokemonsByType(this.typeId).pipe(take(1)).subscribe(res => {
        let pokemonsIdsAndNames: PType[] = res.pokemon.map((el) => {
        el.pokemon.id = this.toolSrv.extratId(el.pokemon.url);
        return el.pokemon;
      })
     if(pokemonsIdsAndNames){{
      if(pokemonsIdsAndNames.length>this.MAX_OF_GROUP){
        pokemonsIdsAndNames.length=this.MAX_OF_GROUP;
      }
      this.pokemonList = [];
      pokemonsIdsAndNames.forEach(el=>{
        this.pokemonSrv.getPokemonsById(el.id).pipe(take(1)).subscribe(
          res=>{
            this.pokemonList.push(res);
          }
        )
        
      })

     }}
      
    })
  }
  showType() {
    if (this.typeId) {
      this.router.navigateByUrl('/fullType/' + this.typeId);
    }
  }
}
