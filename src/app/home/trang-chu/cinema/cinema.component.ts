import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../_core/services/data.service";

@Component({
  selector: "app-cinema",
  templateUrl: "./cinema.component.html",
  styleUrls: ["./cinema.component.scss"]
})
export class CinemaComponent implements OnInit {
  uri: string = "QuanLyRap/LayThongTinHeThongRap";
  arrCinema: any = [];
  arrGroupCinema: any = [];
  arrMovieSchedule: any = [];
  constructor(private dataService: DataService) {}
  _idHeThongRap = "BHDStar";

  ngOnInit() {
    this.getListCinema();
    this.getGroupCinema(this._idHeThongRap);
  }
  getListCinema() {
    this.dataService.get(this.uri).subscribe(data => {
      this.arrCinema = data;
    });
  }
  getGroupCinema(_idHeThongRap) {
    const uriSchedule = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${_idHeThongRap}&maNhom=GP03`;
    const uriGroupCinema = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${_idHeThongRap}`;
    this.dataService.get(uriGroupCinema).subscribe(data => {
      this.arrGroupCinema = data;
    });
    this.dataService.get(uriSchedule).subscribe(_data => {
      this.arrMovieSchedule = _data;
      console.log(this.arrMovieSchedule);
    });
  }
}
