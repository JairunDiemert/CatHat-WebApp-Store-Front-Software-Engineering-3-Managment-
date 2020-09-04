import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ItemCardComponent } from './modules/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogPageComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
