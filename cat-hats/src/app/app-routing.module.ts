import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogPageComponent } from "./pages/catalog-page/catalog-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { RecordsPageComponent } from "./pages/records-page/records-page.component";
import { LoginComponent } from "./login/login.component";
import { HomeTESTComponent } from "./home-test/home-test.component";
import { AuthGuard } from "./auth.guard";
import { LogoutComponent } from "./logout/logout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ItemPageComponent } from "./pages/item-page/item-page.component";
import { SearchBarComponent } from "./modules/search-bar/search-bar.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { ScheduleComponent } from "./pages/schedule-page/schedule.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "catalog", component: CatalogPageComponent },
  { path: "catalog/:item", component: ItemPageComponent },
  { path: "cart", component: CartPageComponent },
  {
    path: "cart/:item",
    component: CartPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "profile",
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
  { path: "register", component: RegisterPageComponent },
  { path: "records", component: RecordsPageComponent },
  { path: "search/:searchTerm", component: SearchPageComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "home-test", component: HomeTESTComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: "schedule", component: ScheduleComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
