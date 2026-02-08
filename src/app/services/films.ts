import { Injectable } from '@angular/core';
import { FILMS } from '../shared/models/des-films';
import { Film } from '../shared/models/film';

@Injectable({
  providedIn: 'root',
})
export class Films {
  films : Film[]=FILMS;
  constructor(){}
  getFilms() : Film []{
    return this.films;
  }
  getFilmParId(id:number) : Film | undefined{
    let i:number;
    for(i=0;i<this.films.length;i++){
      if(Number(this.films[i].id)==id){
        return this.films[i];
      }
    }
    return undefined;
  }
  supprimer(i:number){
    this.films.splice(i,1);
  }
  ajouter(nom:string,desc:string){
    let id:number;
    if(this.films.length==0){
      id=1;
    }else{
      let dern=(this.films.length)-1;
      id=Number(this.films[dern].id)+1;
    }
    this.films.push({id:id.toString(),nom:nom,description:desc,descVisible:false});
  }
  modifier(id:number,nom:string,desc:string){
    const film=this.getFilmParId(+id);
    if(film){
    film.nom=nom;
    film.description=desc;
    }
  }
}
