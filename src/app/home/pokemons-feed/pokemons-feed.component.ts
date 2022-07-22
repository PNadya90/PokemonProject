import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { PType } from 'src/app/shared/pokemonType.model';
import { ToolsService } from 'src/app/shared/tools.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons-feed',
  templateUrl: './pokemons-feed.component.html',
  styleUrls: ['./pokemons-feed.component.scss']
})
export class PokemonsFeedComponent implements OnInit {
  typeList:PType[]
  constructor(private pokemonSrv: PokemonService, private toolSrv:ToolsService) { }

  ngOnInit(): void {
    this.pokemonSrv.getPokemonTypes().pipe(take(1)).subscribe(res=>{ 
      this.typeList =  res.results.map((el)=>{
        el.id = this.toolSrv.extratId(el.url);
        return el;
      })
    })
  }

}
