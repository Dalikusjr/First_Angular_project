import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisiteurRoutingModule } from './visiteur-routing-module';
import { Visiteur } from './visiteur';
import { HomeVisiteur } from './home-visiteur/home-visiteur';
import { Apropos } from './apropos/apropos';
import { DetailFilm } from './detail-film/detail-film';


@NgModule({
  declarations: [
    Visiteur,
    HomeVisiteur,
    Apropos,
    DetailFilm
  ],
  imports: [
    CommonModule,
    VisiteurRoutingModule
  ]
})
export class VisiteurModule { }
