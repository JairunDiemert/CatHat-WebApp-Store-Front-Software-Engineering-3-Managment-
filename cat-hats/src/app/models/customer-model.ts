//model of each customer

import { ItemModel } from 'src/app/models/item-model';

export class customerModel {
    public username : string;
    public cart_Items : ItemModel[] = [];
    public cart_Total : number;
}