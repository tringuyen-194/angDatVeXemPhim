import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemMovieComponent } from "./item-movie.component";

@NgModule({
  declarations: [ItemMovieComponent],
  imports: [CommonModule],
  exports: [ItemMovieComponent]
})
export class ItemMovieModule {}
