import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-group-cinema",
  templateUrl: "./group-cinema.component.html",
  styleUrls: ["./group-cinema.component.scss"]
})
export class GroupCinemaComponent implements OnInit {
  @Input() gcinema;
  constructor() {}

  ngOnInit() {}
}
