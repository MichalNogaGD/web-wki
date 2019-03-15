import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() title: string;
  likes = 3;
  dislikes = 1;

  onDodajLikeClick(){
    this.likes++;
  }
  onDodajDislikeClick(){
    this.dislikes++;
  }
  constructor() { }

  ngOnInit() {
  }

}
