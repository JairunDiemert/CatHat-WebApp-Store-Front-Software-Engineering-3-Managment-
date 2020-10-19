import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';
import { ItemModel } from "src/app/models/item-model";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.css"],
})
export class ItemCardComponent implements OnInit {
  @Input() public items: ItemModel;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  handleClick(){
    this.router.navigate(['catalog/' + this.items.itemName]);
  }
}
