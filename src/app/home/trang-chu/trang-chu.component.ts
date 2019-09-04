import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-trang-chu",
  templateUrl: "./trang-chu.component.html",
  styleUrls: ["./trang-chu.component.scss"]
})
export class TrangChuComponent implements OnInit {
  slide00: string =
    "https://s3img.vcdn.vn/123phim/2019/08/thua-me-15665358976174.jpg";
  slide01: string =
    "https://s3img.vcdn.vn/123phim/2019/08/conan-15665360311852.jpg";
  slide02: string =
    "https://s3img.vcdn.vn/123phim/2019/08/cns-cuoi-tuan-15665361442630.jpg";
  slide03: string =
    "https://s3img.vcdn.vn/123phim/2019/08/ca-sau-15665359841472.jpg";
  iconPlay: string = "assets/img/icons/play-video.png";
  constructor() {}

  ngOnInit() {}
}
