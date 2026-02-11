import { Component, OnInit } from '@angular/core';
import { Films } from '../../services/films';
import { Film } from '../../shared/models/film';
import { Bd } from '../../services/bd';

@Component({
  selector: 'app-lister-films',
  standalone: false,
  templateUrl: './lister-films.html',
  styleUrl: './lister-films.css',
})
export class ListerFilms implements OnInit{
  tabFilms : any;
  constructor(private bd:Bd){}
  ngOnInit(): void {
    this.recupererFilms();
  }
  recupererFilms(){
    this.bd.getFilms().subscribe(data=>{this.tabFilms=data;});
  }
  supprimer(i:any){
    this.bd.deleteFilm(i).then(()=>{alert("Film supprimé ✅");}).catch(err => console.error(err));
  }
}
