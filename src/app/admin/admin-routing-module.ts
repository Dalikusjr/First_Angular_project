import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin } from './admin';
import { ListerFilms } from './lister-films/lister-films';
import { AjouterFilm } from './ajouter-film/ajouter-film';
import { DetailsFilm } from './details-film/details-film';
import { ModifierFilm } from './modifier-film/modifier-film';
import { authGuard } from '../auth/auth-guard';

const routes: Routes = [{ path: '', component: Admin,canActivate: [authGuard] ,children : [
  {path: 'lister-films',component : ListerFilms},
  {path: 'ajouter-film',component : AjouterFilm},
  { path: 'details/:id', component: DetailsFilm },
  { path: 'modifier/:id', component: ModifierFilm },
  { path: '',component:ListerFilms}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
