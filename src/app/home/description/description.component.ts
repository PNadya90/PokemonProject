import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  id:number;
  constructor(private route: ActivatedRoute, private pokemonSrv: PokemonService) { }

  ngOnInit(): void {
    let paramId = this.route.snapshot.paramMap.get('id');
    paramId ? this.id = +paramId: 0;


  }

}
