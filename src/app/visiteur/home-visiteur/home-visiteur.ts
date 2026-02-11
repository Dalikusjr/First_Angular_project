import { Component } from '@angular/core';
import { FILMS } from '../../shared/models/des-films';
import { Film } from '../../shared/models/film';
import { Bd } from '../../services/bd';

@Component({
  selector: 'app-home-visiteur',
  standalone: false,
  templateUrl: './home-visiteur.html',
  styleUrl: './home-visiteur.css',
})
export class HomeVisiteur {
  tabFilms : any;
  constructor(private bd:Bd){}
  ngOnInit(): void {
    this.recupererFilms();
  }
  recupererFilms(){
    this.bd.getFilms().subscribe(data=>{this.tabFilms=data;});
  }
  toggle(i:number){
    this.tabFilms[i].descVisible = !this.tabFilms[i].descVisible;
  }
}
