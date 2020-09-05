import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogPageComponent } from "./pages/catalog-page/catalog-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  { path: "catalog", component: CatalogPageComponent },
  { path: "", component: HomePageComponent },
  { path: "cart", component:CartPageComponent},
  {path: '**', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
