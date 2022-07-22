import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/shared/pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input()
  public pokemon: Pokemon;

  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }
  showDescr(){
    this.router.navigate(['/description/1']);
    if(this.pokemon){
      this.router.navigateByUrl('/description/'+this.pokemon.id);
    }
  }
  addToCart($event:Event){
    $event.stopPropagation();
    console.log("cart");
  }
}
