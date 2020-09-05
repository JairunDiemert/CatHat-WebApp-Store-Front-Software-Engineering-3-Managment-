import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogPageComponent } from "./pages/catalog-page/catalog-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

const routes: Routes = [
  { path: "catalog", component: CatalogPageComponent },
  { path: "", component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
