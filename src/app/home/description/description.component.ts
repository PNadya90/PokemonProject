import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { take } from 'rxjs';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { PType } from 'src/app/shared/pokemonType.model';
import { UserAccountService } from '../user-account/user-account.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  pokemon: Pokemon;
  id: string;
  constructor(private route: ActivatedRoute, private pokemonSrv: PokemonService, private userSrv:UserAccountService) { }

  ngOnInit(): void {
    let paramId = this.route.snapshot.paramMap.get('id');

    if (paramId) {
      this.id = paramId;
      this.pokemonSrv.getPokemonsById(this.id).pipe(take(1)).subscribe(res => {
        this.pokemon = res;
      })
    }


  }
  addToCart($event:Event){
    $event.stopPropagation();
    console.log("cart");
    let currentPokemon:PType = {
      id:'' + this.pokemon.id,
      name: this.pokemon.name,
      url: '',
    }

    this.userSrv.addToCart(currentPokemon);
  }
}
