import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss']
})
export class ItemMovieComponent implements OnInit {
  @Input() movie
  iconPlay: string ="assets/img/icons/play-video.png"
  constructor() { }

  ngOnInit() {
  }

}
