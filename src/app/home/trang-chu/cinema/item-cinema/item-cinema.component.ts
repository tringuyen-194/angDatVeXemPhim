import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-cinema",
  templateUrl: "./item-cinema.component.html",
  styleUrls: ["./item-cinema.component.scss"]
})
export class ItemCinemaComponent implements OnInit {
  @Input() cinema;
  @Output() eventId = new EventEmitter();
  _idHeThongRap = "";

  constructor() {}

  ngOnInit() {
    
  }
  getId() {
    this._idHeThongRap = this.cinema.maHeThongRap;
    this.eventId.emit(this._idHeThongRap);
  }
}
