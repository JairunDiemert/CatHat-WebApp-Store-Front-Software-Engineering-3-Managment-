//model of each customer

import { ItemModel } from "src/app/models/item-model";

export class customerModel {
  public username: string;
  public cartItems: ItemModel[] = [];
  public cartTotal: number;
  public name: string;
  public email: string;
  public address: string;
  public password: string;
}
