import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { UserService } from "src/app/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { customerModel } from "src/app/models/customer-model";
import { ItemModel } from "src/app/models/item-model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"],
})
export class CartPageComponent implements OnInit {
  public customer: customerModel;

  //array of cart items
  public cart_Items: ItemModel[] = [];

  public list = [];

  public cart_Total;

  constructor(
    private auth: AuthService,
    private user: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  addSchedule(event) {
    event.preventDefault();
    const target = event.target;
    const scheduleDate = target.querySelector("#scheduleDate").value;
    const userEmail: String = localStorage.getItem("email");
    const catalogTitle = this.cart_Items[0].itemName;

    this.auth
      .addSchedule(scheduleDate, userEmail, catalogTitle)
      .subscribe((data) => {
        console.log(data);
        if (data.success) {
          this.router.navigate(["schedule"]);
        }
        window.alert(data.message);
      });
  }

  displayCart() {
    let email: String = localStorage.getItem("email");

    this.user.getCart(email).subscribe((data) => {
      if (data.success) {
        this.cart_Total = data.total;
        this.list = data.cart;
        let initialList = [];

        this.list.forEach((item) => {
          if (item) {
            initialList.push({
              itemName: item.title,
              itemPrice: item.price.toFixed(2),
              itemID: item._id,
              itemDescription: item.description,
              itemQuantity: item.quantity,
              itemImg: item.img,
            });
          }
        });
        this.cart_Items = initialList;
      } else {
        alert(
          "The user cart has not been successfully retrieved from the database."
        );
      }
    });
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.length > 1) {
      const itemToDisplay = this.activatedRoute.snapshot.paramMap.get("item");

      let email: String = localStorage.getItem("email");

      this.user.addCartItem(itemToDisplay, email).subscribe((data) => {
        console.log("Added cart item in cart page.");
        this.displayCart();
        this.router.navigateByUrl("/", { skipLocationChange: true }).then(
          () => {
            this.router.navigate(["/cart"]);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    } else {
      this.displayCart();
    }
  }
}
