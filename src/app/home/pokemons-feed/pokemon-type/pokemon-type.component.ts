import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonType } from 'src/app/shared/pokemonType.model';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent implements OnInit {
  @Input() type: PokemonType;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  showType() {
    this.router.navigate(['/fullType/1']);
    if (this.type) {
      this.router.navigateByUrl('/fullType/' + this.type.id);
    }
  }
}
