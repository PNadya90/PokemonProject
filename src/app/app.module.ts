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
import { FullTypeComponent } from './home/full-type/full-type.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAccountComponent } from './home/user-account/user-account.component'
import { FormsModule } from '@angular/forms';
import { InternationalizationModule } from './internationalization/internationalization.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/locales/', '.json');
}

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
    PokemonItemComponent,
    FullTypeComponent,
    UserAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InternationalizationModule.forRoot({ locale_id: 'en-EN' }), // iniating with default language: en-US
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
