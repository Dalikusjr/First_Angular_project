import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-detail-film',
  standalone: false,
  templateUrl: './detail-film.html',
  styleUrl: './detail-film.css',
})
export class DetailFilm {
  @Input() desc?:string;
}
