import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CatalogService } from "src/app/services/catalog.service";
import { ItemModel } from "src/app/models/item-model";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"],
})
export class SearchPageComponent implements OnInit {
  public items: ItemModel[] = [];

  public item = [];

  constructor(private route: ActivatedRoute, private Catalog: CatalogService) {
    const itemsToDisplay = this.route.snapshot.paramMap.get("searchTerm");
    console.log(itemsToDisplay);
    this.Catalog.searchItem(itemsToDisplay).subscribe((data) => {
      if (data.success) {
        alert("Found matching search items.");
        console.log(data.data);

        this.item = data.data;
        let searchItem = [];
        this.item.forEach((item) => {
          searchItem.push({
            itemName: item.title,
            itemPrice: item.price.toFixed(2),
            itemID: item._id,
            itemDescription: item.description,
            itemQuantity: item.quantity,
            itemImg: item.img,
          });
        });
        this.items = searchItem;
      } else {
        alert("This item was not found in the catalog.");
      }
    });
  }

  ngOnInit(): void {}
}
