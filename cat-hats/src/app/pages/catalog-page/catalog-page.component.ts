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
      if (data.success) {
        this.list = data.data;
        let initialList = [];
        this.list.forEach(item => {
          initialList.push({
            itemName: item.title,
            itemPrice: (item.price).toFixed(2),
            itemID: item._id,
            itemDescription: item.description,
            itemQuantity: item.quantity,
            itemImg : item.img
          });
        })
        this.pageItems = initialList;
      } else {
        alert("The catalog has not been successfully retrieved from the database.");
      }
    });
  }

  ngOnInit(): void {
  }
}
