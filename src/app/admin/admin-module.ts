import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing-module';
import { Admin } from './admin';
import { ListerFilms } from './lister-films/lister-films';
import { AjouterFilm } from './ajouter-film/ajouter-film';
import { DetailsFilm } from './details-film/details-film';
import { ModifierFilm } from './modifier-film/modifier-film';


@NgModule({
  declarations: [
    Admin,
    ListerFilms,
    AjouterFilm,
    DetailsFilm,
    ModifierFilm
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
