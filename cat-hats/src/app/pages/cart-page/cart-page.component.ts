import { Component, OnInit } from '@angular/core';
import { customerModel } from 'src/app/models/customer-model';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"],
})
export class CartPageComponent implements OnInit {
  public customer : customerModel;

  //array of cart items
  public cart_Items : ItemModel[] = [];

  constructor() {}

  ngOnInit(): void {
    //TO DO: listing data for each cart item from database
    
    //let the array cart_Items be named cart
    let cart = [];

    //temporary objects for viewing functionality, will update with database objects
    for(let i = 0; i < 3; i++){

      //push inserts objects into cart array
      cart.push({
        itemName: "Mini Kitty Beanie",
        itemPrice: 16.79,
        itemID: 2,
        itemDescription: "A miniature feline beanie",
        itemQuantity: 9,
        itemImg: "./../../../assets/200x200.png"
      })
    }

    //constructor instantiation
    this.cart_Items = cart;

    //displays array objects contained within the cart array
    //console.log(cart);
  } 
  
}
