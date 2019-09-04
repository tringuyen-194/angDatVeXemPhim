import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../_core/services/data.service";

@Component({
  selector: "app-coming-soon",
  templateUrl: "./coming-soon.component.html",
  styleUrls: ["./coming-soon.component.scss"]
})
export class ComingSoonComponent implements OnInit {
  uri: string = "QuanLyPhim/LayDanhSachPhim?maNhom=GP04";
  arrComingMovie = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getListMovie();
  }
  getListMovie() {
    this.dataService.get(this.uri).subscribe(data => {
      this.arrComingMovie = data;
    });
  }
}
