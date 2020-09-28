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
import { RecordsPageComponent } from "./pages/records-page/records-page.component";
import { RecordsService } from "./records.service";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeTESTComponent } from "./home-test/home-test.component";
import { AuthGuard } from "./auth.guard";
import { UserService } from "./user.service";
import { LogoutComponent } from "./logout/logout.component";

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
    RecordsPageComponent,
    LoginComponent,
    AdminComponent,
    HomeTESTComponent,
    LogoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [RecordsService, UserService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
