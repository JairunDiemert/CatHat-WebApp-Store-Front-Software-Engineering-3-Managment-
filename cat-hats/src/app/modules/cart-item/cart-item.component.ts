//Input allows passing of cart item into array list of cart items in cart-Page.html
import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../models/Cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  
  //identify cart_Item passing into cart-page.html
  @Input() cart_Item: Cart;

  constructor() { }

  ngOnInit(): void {
  
  }

}
