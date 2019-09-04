import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TrangChuComponent } from "./trang-chu.component";

const routes: Routes = [{ path: "", component: TrangChuComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangChuRoutingModule {}
