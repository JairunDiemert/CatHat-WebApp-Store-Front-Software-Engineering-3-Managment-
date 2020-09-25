import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogPageComponent } from "./pages/catalog-page/catalog-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { RecordsPageComponent } from "./pages/records-page/records-page.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeTESTComponent } from "./home-test/home-test.component";

const routes: Routes = [
  { path: "catalog", component: CatalogPageComponent },
  { path: "", component: HomePageComponent },
  { path: "cart", component: CartPageComponent },
  { path: "records", component: RecordsPageComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  { path: "home-test", component: HomeTESTComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
