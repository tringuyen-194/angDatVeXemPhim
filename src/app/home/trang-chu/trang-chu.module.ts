import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrangChuComponent } from "./trang-chu.component";
import { TrangChuRoutingModule } from "./trang-chu-routing.module";
import { MaterialModule } from "src/app/_core/services/material-module";
import { AvailableModule } from "./available/available.module";
import { ComingSoonModule } from "./coming-soon/coming-soon.module";
import { CinemaModule } from "./cinema/cinema.module";

@NgModule({
  declarations: [TrangChuComponent],
  exports: [TrangChuComponent],
  imports: [
    CommonModule,
    TrangChuRoutingModule,
    MaterialModule,
    AvailableModule,
    ComingSoonModule,
    CinemaModule
  ]
})
export class TrangChuModule {}
