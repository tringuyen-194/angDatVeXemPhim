import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../../../_core/services/data.service";
@Component({
  selector: "app-available",
  templateUrl: "./available.component.html",
  styleUrls: ["./available.component.scss"]
})
export class AvailableComponent implements OnInit {
  uri: string = "QuanLyPhim/LayDanhSachPhim?maNhom=GP03";
  arrAvailableMovie = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getListMovie();
  }
  getListMovie() {
    this.dataService.get(this.uri).subscribe(data => {
      this.arrAvailableMovie = data;
    });
  }
}
