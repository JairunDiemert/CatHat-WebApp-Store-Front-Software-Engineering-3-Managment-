import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RecordsService {
  constructor() {}

  //remove after testing
  getData() {
    let records = [];
    for (let i = 0; i < 20; i++) {
      records.push({
        itemName: "Small Cat Hat",
        itemPrice: 15.99,
        itemID: i + 1,
        itemDescription: "A small hat for a cat.",
        itemQuantity: 15,
        itemImg: "./../../../assets/Hat_200x200.png",
      });
    }
    return records;
  }
}
