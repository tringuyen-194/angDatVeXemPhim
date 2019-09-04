import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComingSoonComponent } from "./coming-soon.component";
import { ItemMovieModule } from "../item-movie/item-movie.module";

@NgModule({
  declarations: [ComingSoonComponent],
  imports: [CommonModule, ItemMovieModule],
  exports: [ComingSoonComponent]
})
export class ComingSoonModule {}
