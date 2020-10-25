import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/catalog.service';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public items : ItemModel[] = [];

  constructor(private route: ActivatedRoute, private Catalog : CatalogService) { 
    const itemsToDisplay = this.route.snapshot.paramMap.get('searchTerm');
    console.log(itemsToDisplay);
    this.Catalog.searchItem(itemsToDisplay).subscribe((data) => {
      if(data.success){
        alert("Found items");
        console.log(data.data);
      }
      else {
        alert("This item could not be retrieved from the catalog.");
      }
    });
  }

  ngOnInit(): void {
  }

}
