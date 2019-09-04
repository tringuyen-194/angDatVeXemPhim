import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CinemaComponent } from "./cinema.component";
import { ItemCinemaComponent } from "./item-cinema/item-cinema.component";
import { GroupCinemaComponent } from './group-cinema/group-cinema.component';
import { MovieScheduleComponent } from './movie-schedule/movie-schedule.component';

@NgModule({
  declarations: [CinemaComponent, ItemCinemaComponent, GroupCinemaComponent, MovieScheduleComponent],
  imports: [CommonModule],
  exports: [CinemaComponent]
})
export class CinemaModule {}
