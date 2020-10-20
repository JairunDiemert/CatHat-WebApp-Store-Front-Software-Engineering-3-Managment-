import { Component, OnInit } from "@angular/core";
import { ItemModel } from "src/app/models/item-model";
import { CatalogService } from "src/app/catalog.service";

@Component({
  selector: "app-catalog-page",
  templateUrl: "./catalog-page.component.html",
  styleUrls: ["./catalog-page.component.css"],
})
export class CatalogPageComponent implements OnInit {
  public pageItems: ItemModel[] = [];
  
  public list = [];

  constructor(private Catalog: CatalogService) {
    this.Catalog.getCatalog().subscribe((data) => {
      console.log(data);
      if (data.success) {
        alert("The catalog has been retrieved from the database.");
      } else {
        alert("The catalog has not been successfully retrieved from the database.");
      }

      this.list = data;
    });
  }

  ngOnInit(): void {
    let list = [];
    for (let i = 0; i < 20; i++) {
      list.push({
        itemName: "Small Cat Hat",
        itemPrice: 15.99,
        itemID: i + 1,
        itemDescription: "A small hat for a cat.",
        itemQuantity: 15,
        itemImg: "./../../../assets/Hat_200x200.png",
      });
    }
    this.pageItems = list;
    console.log(list);
  }
}
