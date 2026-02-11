import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bd } from '../../services/bd';



@Component({
  selector: 'app-ajouter-film',
  standalone: false,
  templateUrl: './ajouter-film.html',
  styleUrl: './ajouter-film.css',
})
export class AjouterFilm {
  film:any;
  constructor(private bd:Bd,private router:Router){}
  ajouter(nom:string,desc:string){
    this.film={
      nom:nom,
      description:desc,
      descVisible:false
    }
    this.bd.addFilm(this.film).then(()=>{alert("Film ajouté avec succès ✅");this.router.navigate(['/admin'])}).catch(()=>{alert("Erreur lors de l'ajout ❌");})
  }
}
