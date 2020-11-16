//Input allows usage of cart-item in cart-page.component.html with selector
import { Component, OnInit, Input } from "@angular/core";
import { ItemModel } from "src/app/models/item-model";
import { customerModel } from "src/app/models/customer-model";
import { CatalogService } from "src/app/services/catalog.service";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "[app-cart-item]",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"],
})
export class CartItemComponent implements OnInit {
  @Input() public items: ItemModel;

  constructor(
    private Catalog: CatalogService,
    private user: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleClick() {
    let email: String = localStorage.getItem("email");
    this.user.deleteCartItem(this.items.itemID, email).subscribe((data) => {
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(
        () => {
          this.router.navigate(["/cart"]);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
