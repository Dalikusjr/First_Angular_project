import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  login?:string;
  mdp?:string;
  constructor(private auth:Auth,private router:Router){}
  connexion(loginForm:NgForm){
    console.log(loginForm.value);
    this.auth.seConnecter(loginForm.value['login'],loginForm.value['mdp']);
  }
}
