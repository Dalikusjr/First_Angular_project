import { Component ,OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Films } from '../../services/films';
import { Film } from '../../shared/models/film';
import { Bd } from '../../services/bd';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modifier-film',
  standalone: false,
  templateUrl: './modifier-film.html',
  styleUrl: './modifier-film.css',
})
export class ModifierFilm {
  constructor(private route: ActivatedRoute,private bd:Bd,private router:Router) { }
  id!:any;
  nomFilm? : string;
  descFilm? : string;
  film:any;
  ngOnInit() {
     this.id = this.route.snapshot.params['id'];
     this.bd.getFilm(this.id).subscribe(res=>{
      this.film=res;
      this.nomFilm=this.film.nom;
      this.descFilm=this.film.description;
     });
}
soumettre(f: NgForm) {
  const nom=f.value['nom'];
  const description=f.value['desc'];
  this.bd.updateFilm(this.id,{nom,description}).then(()=>{alert("Film modifié avec succès ✅");this.router.navigate(['/admin'])}).catch(()=>{alert("Erreur lors de la modification ❌");})
}

}
