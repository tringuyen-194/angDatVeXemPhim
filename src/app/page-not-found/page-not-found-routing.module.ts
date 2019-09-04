import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./page-not-found.component";

const routes: Routes = [{ path: "", component: PageNotFoundComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule {}
