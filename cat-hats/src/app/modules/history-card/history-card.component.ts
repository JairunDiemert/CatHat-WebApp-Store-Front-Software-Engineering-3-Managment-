import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-history-card",
  templateUrl: "./history-card.component.html",
  styleUrls: ["./history-card.component.css"],
})
export class HistoryCardComponent implements OnInit {
  @Input() public orders;
  public orderList = [];
  constructor() {}

  ngOnInit(): void {
    this.orderList = this.orders.shippingCart;
  }
}
