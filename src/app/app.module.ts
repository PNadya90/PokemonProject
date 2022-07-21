import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainMenuComponent } from './home/main-menu/main-menu.component';
import { PokemonTypeComponent } from './home/pokemons-feed/pokemon-type/pokemon-type.component';
import { PokemonsFeedComponent } from './home/pokemons-feed/pokemons-feed.component';
import { DescriptionComponent } from './home/description/description.component';
import { PokemonItemComponent } from './home/pokemons-feed/pokemon-type/pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MainMenuComponent,
    PokemonTypeComponent,
    PokemonsFeedComponent,
    DescriptionComponent,
    PokemonItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
