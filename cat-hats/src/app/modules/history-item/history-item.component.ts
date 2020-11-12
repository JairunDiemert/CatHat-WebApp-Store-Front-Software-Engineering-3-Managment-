import { Component, Input, OnInit } from "@angular/core";
import { ItemModel } from "src/app/models/item-model";

@Component({
  selector: "app-history-item",
  templateUrl: "./history-item.component.html",
  styleUrls: ["./history-item.component.css"],
})
export class HistoryItemComponent implements OnInit {
  //will probably have to create a model for history items
  @Input() public items: ItemModel;
  constructor() {}

  ngOnInit(): void {}
}
