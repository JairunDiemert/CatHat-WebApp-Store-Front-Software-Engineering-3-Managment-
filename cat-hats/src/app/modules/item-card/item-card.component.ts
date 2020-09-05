import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() public items : ItemModel;

  constructor() { }

  ngOnInit(): void {
    
  }


}
