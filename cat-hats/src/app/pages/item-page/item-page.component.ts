import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  public item : ItemModel;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const itemToDisplay = this.route.snapshot.paramMap.get('item');
  }

}
