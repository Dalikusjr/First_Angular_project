import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Films } from '../../services/films';
import { Film } from '../../shared/models/film';

@Component({
  selector: 'app-details-film',
  standalone: false,
  templateUrl: './details-film.html',
  styleUrl: './details-film.css',
})
export class DetailsFilm implements OnInit{
  constructor(private route: ActivatedRoute,private films: Films) { }
  nomFilm?:string="Affiche le nom du film";
  descFilm?:string="Affiche la description du film";
    ngOnInit() {
const id = this.route.snapshot.params['id'];
this.nomFilm = this.films.getFilmParId(+id)?.nom;
this.descFilm =this.films.getFilmParId(+id)?.description;
}
}
