import { Component } from '@angular/core';
import { Auth } from '../auth/auth';


@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  constructor(private auth:Auth){}
  logout(){
    this.auth.seDeconnecter();
  }
}
