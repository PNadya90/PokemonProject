import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DescriptionComponent } from './home/description/description.component';
import { HomeComponent } from './home/home.component';
import { PokemonsFeedComponent } from './home/pokemons-feed/pokemons-feed.component';

const routes: Routes = [
  { path: '', component: PokemonsFeedComponent},
  {path:'home', component: PokemonsFeedComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contactUs', component:ContactComponent},
  {path: 'decription', component: DescriptionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
