import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsFeedComponent } from './pokemons-feed.component';

describe('PokemonsFeedComponent', () => {
  let component: PokemonsFeedComponent;
  let fixture: ComponentFixture<PokemonsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
