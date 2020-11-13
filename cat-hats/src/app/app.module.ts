import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CatalogPageComponent } from "./pages/catalog-page/catalog-page.component";
import { ItemCardComponent } from "./modules/item-card/item-card.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { NavBarComponent } from "./modules/nav-bar/nav-bar.component";
import { CartItemComponent } from "./modules/cart-item/cart-item.component";
import { FooterComponent } from "./modules/footer/footer.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { LoginCardComponent } from "./modules/login-card/login-card.component";
import { FormsModule } from "@angular/forms";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LoginComponent } from "./login/login.component";
import { HomeTESTComponent } from "./home-test/home-test.component";
import { AuthGuard } from "./auth.guard";
import { UserService } from "./user.service";
import { LogoutComponent } from "./logout/logout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SearchBarComponent } from "./modules/search-bar/search-bar.component";
import { ItemPageComponent } from "./pages/item-page/item-page.component";
import { CatalogService } from "./catalog.service";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { ScheduleComponent } from "./pages/schedule-page/schedule.component";
import { HistoryPageComponent } from "./pages/history-page/history-page.component";
import { HistoryItemComponent } from "./modules/history-item/history-item.component";
import { HistoryCardComponent } from './modules/history-card/history-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogPageComponent,
    ItemCardComponent,
    HomePageComponent,
    CartPageComponent,
    NavBarComponent,
    CartItemComponent,
    FooterComponent,
    ProfilePageComponent,
    LoginCardComponent,
    RegisterPageComponent,
    LoginComponent,
    HomeTESTComponent,
    LogoutComponent,
    DashboardComponent,
    SearchBarComponent,
    ItemPageComponent,
    SearchPageComponent,
    ScheduleComponent,
    HistoryPageComponent,
    HistoryItemComponent,
    HistoryCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UserService, AuthGuard, CatalogService],

  bootstrap: [AppComponent],
})
export class AppModule {}
