import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bd } from '../../services/bd';


@Component({
  selector: 'app-details-film',
  standalone: false,
  templateUrl: './details-film.html',
  styleUrl: './details-film.css',
})
export class DetailsFilm implements OnInit{
  constructor(private route: ActivatedRoute,private bd:Bd) { }
  nomFilm?:string="Affiche le nom du film";
  descFilm?:string="Affiche la description du film";
    ngOnInit() {
const id = this.route.snapshot.params['id'];
this.bd.getFilm(id).subscribe(res=>{
this.nomFilm = res.nom;
this.descFilm =res.description;
})
}
}
