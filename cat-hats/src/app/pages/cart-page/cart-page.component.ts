import { Component, OnInit } from "@angular/core";
import { Cart } from "../../models/Cart";

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"],
})
export class CartPageComponent implements OnInit {
  //array of cart items
  cart_Item: Cart[];

  constructor() {}

  ngOnInit(): void {
    //TO DO: listing data for each cart item from database
    this.cart_Item = [
      {
        title: "Party Cat Hat",
      },
    ];
  }
}
