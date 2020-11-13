import { Component, Input, OnInit } from "@angular/core";
import { ItemModel } from "src/app/models/item-model";

@Component({
  selector: "app-history-item",
  templateUrl: "./history-item.component.html",
  styleUrls: ["./history-item.component.css"],
})
export class HistoryItemComponent implements OnInit {
  @Input() public items: any;
  constructor() {}

  ngOnInit(): void {}
}
