import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  estConnecte:boolean=false;
  constructor(private router:Router){}
  seConnecter(login:string,mdp:string){
    if(login=='admin' && mdp=='admin'){
      this.estConnecte=true;
      this.router.navigate(['/admin']);
    }else alert('Login ou mot de passe incorrecte');
  }
  seDeconnecter(){
    this.estConnecte=false;
    this.router.navigate(['/login']);
  }
}
