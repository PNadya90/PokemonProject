import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from 'src/app/home/user-account/user-account.service';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { PType } from 'src/app/shared/pokemonType.model';
import { ToastrService } from 'ngx-toastr';
import { LocalizationService } from 'src/app/internationalization/localization.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input()
  public pokemon: Pokemon;

  constructor(private router:Router,
     private userSrv:UserAccountService,
     private toastr: ToastrService,
     private translationSrv:LocalizationService
     ) {

   }

  ngOnInit(): void {
  }
  showDescr(){
    if(this.pokemon){
      this.router.navigateByUrl('/description/'+this.pokemon.id);
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
    this.toastr.success(this.translationSrv.translate('success'),this.translationSrv.translate('added'));
  }
}
