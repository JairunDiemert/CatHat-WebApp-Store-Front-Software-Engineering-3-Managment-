import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogPageComponent } from "./pages/catalog-page/catalog-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { RecordsPageComponent } from "./pages/records-page/records-page.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeTESTComponent } from "./home-test/home-test.component";
import { AuthGuard } from "./auth.guard";
import { LogoutComponent } from "./logout/logout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "catalog", component: CatalogPageComponent },
  { path: "cart", component: CartPageComponent },
  { path: "profile", component: ProfilePageComponent },
  { path: "register", component: RegisterPageComponent },
  { path: "records", component: RecordsPageComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "home-test", component: HomeTESTComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: "register-test", component: RegisterComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
