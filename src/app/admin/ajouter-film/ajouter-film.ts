import { Component } from '@angular/core';
import { Films } from '../../services/films';


@Component({
  selector: 'app-ajouter-film',
  standalone: false,
  templateUrl: './ajouter-film.html',
  styleUrl: './ajouter-film.css',
})
export class AjouterFilm {
  constructor(private films : Films){}
  ajouter(nom:string,desc:string){
    this.films.ajouter(nom,desc);
    alert("Votre film est ajouté");
  }
}
