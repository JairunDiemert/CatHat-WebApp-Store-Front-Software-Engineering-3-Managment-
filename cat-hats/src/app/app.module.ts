import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { CatalogPageComponent } from "./pages/catalog-page/catalog-page.component";
import { ItemCardComponent } from "./modules/item-card/item-card.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { NavBarComponent } from "./modules/nav-bar/nav-bar.component";
import { CartItemComponent } from "./modules/cart-item/cart-item.component";
import { FooterComponent } from './modules/footer/footer.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginCardComponent } from './modules/login-card/login-card.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
