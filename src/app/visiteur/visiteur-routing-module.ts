import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Apropos} from './apropos/apropos';
import { HomeVisiteur} from './home-visiteur/home-visiteur';
import { Visiteur } from './visiteur';

const routes: Routes = [
  { path: '', component: Visiteur,children : [
    {path : 'apropos', component : Apropos},
    {path : 'home-visiteur', component : HomeVisiteur},
    {path : '', component : HomeVisiteur}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiteurRoutingModule { }
