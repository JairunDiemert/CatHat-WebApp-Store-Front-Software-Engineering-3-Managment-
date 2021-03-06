import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CatalogService } from "src/app/services/catalog.service";
import { UserService } from "src/app/services/user.service";
import { ItemModel } from "src/app/models/item-model";
import { Router } from "@angular/router";

@Component({
  selector: "app-item-page",
  templateUrl: "./item-page.component.html",
  styleUrls: ["./item-page.component.css"],
})
export class ItemPageComponent implements OnInit {
  public item: ItemModel = {
    itemName: "null",
    itemPrice: 0,
    itemID: 0,
    itemDescription: "null",
    itemQuantity: 0,
    itemImg: "./../../../assets/Hat_200x200.png",
  };
  public itemAvailable: Boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private Catalog: CatalogService,
    private user: UserService
  ) {
    const itemToDisplay = this.activatedRoute.snapshot.paramMap.get("item");
    this.Catalog.getItem(itemToDisplay).subscribe((data) => {
      if (data.success) {
        this.item = {
          itemName: data.data.title,
          itemPrice: data.data.price.toFixed(2),
          itemID: data.data._id,
          itemDescription: data.data.description,
          itemQuantity: data.data.quantity,
          itemImg: data.data.img,
        };
      } else {
        alert("This item could not be retrieved from the catalog.");
      }
      if (this.item.itemQuantity > 0) {
        this.itemAvailable = true;
      } else {
        this.itemAvailable = false;
      }
    });
  }

  ngOnInit(): void {}

  handleClick() {
    this.Catalog.getItem(this.item.itemID).subscribe((data) => {
      if (data.success) {
        this.item = {
          itemName: data.data.title,
          itemPrice: data.data.price.toFixed(2),
          itemID: data.data._id,
          itemDescription: data.data.description,
          itemQuantity: data.data.quantity,
          itemImg: data.data.img,
        };
      }
    });
    if (this.item.itemQuantity > 0) {
      this.router.navigate(["cart/" + this.item.itemID]);
    } else {
      alert("out of stock item");
    }
  }
}
