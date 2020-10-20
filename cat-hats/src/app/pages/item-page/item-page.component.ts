import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/catalog.service';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  public item : ItemModel = {
    itemName : "null",
    itemPrice : 0,
    itemID: 0,
    itemDescription: "null",
    itemQuantity : 0,
    itemImg : "./../../../assets/Hat_200x200.png"
  };
  constructor(private route: ActivatedRoute, private Catalog : CatalogService) { 
    const itemToDisplay = this.route.snapshot.paramMap.get('item');
    this.Catalog.getItem(itemToDisplay).subscribe((data) => {
      if(data.success){
        this.item = {
          itemName : data.data.title,
          itemPrice : (data.data.price).toFixed(2),
          itemID: data.data._id,
          itemDescription: data.data.description,
          itemQuantity : data.data.quantity,
          itemImg : data.data.img
        }
      }
      else {
        alert("This item could not be retried from the catalog.");
      }
    });
  }

  ngOnInit(): void {
  }

}
