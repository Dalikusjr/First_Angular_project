import { Component, OnInit } from '@angular/core';
import { Films } from '../../services/films';
import { Film } from '../../shared/models/film';

@Component({
  selector: 'app-lister-films',
  standalone: false,
  templateUrl: './lister-films.html',
  styleUrl: './lister-films.css',
})
export class ListerFilms implements OnInit{
  tabFilms : Film[]=[];
  constructor(private films : Films){}
  ngOnInit(): void {
    this.tabFilms=this.films.getFilms();
  }
  supprimer(i:number){
    this.films.supprimer(i);
  }
}
