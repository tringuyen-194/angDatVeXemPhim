import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  logo: string = "assets/img/icons/web-logo.png";
  imgLogin: string = "assets/img/avatar.png";
  imgLocation: string ="assets/img/icons/location-header.png"

  constructor() {}

  ngOnInit() {}
}
