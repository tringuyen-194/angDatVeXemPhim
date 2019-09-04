import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-movie-schedule",
  templateUrl: "./movie-schedule.component.html",
  styleUrls: ["./movie-schedule.component.scss"]
})
export class MovieScheduleComponent implements OnInit {
  @Input() schedule;
  constructor() {}

  ngOnInit() {}
}
