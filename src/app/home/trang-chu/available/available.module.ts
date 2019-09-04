import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AvailableComponent } from "./available.component";
import { ItemMovieModule } from "../item-movie/item-movie.module";
@NgModule({
  declarations: [AvailableComponent],
  imports: [CommonModule, ItemMovieModule],
  exports: [AvailableComponent]
})
export class AvailableModule {}
