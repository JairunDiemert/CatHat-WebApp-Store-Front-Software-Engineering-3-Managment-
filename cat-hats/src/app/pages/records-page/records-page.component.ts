import { Component, OnInit } from "@angular/core";
import { RecordsService } from "src/app/records.service";

@Component({
  selector: "app-records-page",
  templateUrl: "./records-page.component.html",
  styleUrls: ["./records-page.component.css"],
})
export class RecordsPageComponent implements OnInit {
  records = [];

  constructor(private myFirstService: RecordsService) {}

  ngOnInit(): void {
    this.myFirstService.getData().subscribe((data) => {
      this.records = data.obj;
    });
  }
}
