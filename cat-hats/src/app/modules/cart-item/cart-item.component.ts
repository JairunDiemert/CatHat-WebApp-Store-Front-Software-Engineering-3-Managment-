//Input allows usage of cart-item in cart-page.component.html with selector
import { Component, OnInit, Input } from "@angular/core";
import { ItemModel } from "src/app/models/item-model";
import { customerModel } from "src/app/models/customer-model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() public items: ItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
