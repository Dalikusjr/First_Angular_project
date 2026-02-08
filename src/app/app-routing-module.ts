import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { Notfound } from './notfound/notfound';
import { Login } from './auth/login/login';

const routes: Routes = [
  { path: 'visiteur', loadChildren: () => import('./visiteur/visiteur-module').then(m => m.VisiteurModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule) },
  { path: 'login',component : Login},
  { path: '', redirectTo : 'visiteur',pathMatch : 'full'},
  { path: '**',component : Notfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy : PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
