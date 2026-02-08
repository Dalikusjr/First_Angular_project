import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Films } from '../../services/films';
import { Film } from '../../shared/models/film';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modifier-film',
  standalone: false,
  templateUrl: './modifier-film.html',
  styleUrl: './modifier-film.css',
})
export class ModifierFilm {
  constructor(private route: ActivatedRoute,private films: Films) { }
  id!:number;
  nomFilm? : string;
  descFilm? : string;
  ngOnInit() {
     this.id = +this.route.snapshot.params['id'];
     this.nomFilm=this.films.getFilmParId(this.id)?.nom;
     this.descFilm=this.films.getFilmParId(this.id)?.description;
}
soumettre(f: NgForm) {
this.films.modifier(this.id,f.value['nom'],f.value['desc']);
}

}
