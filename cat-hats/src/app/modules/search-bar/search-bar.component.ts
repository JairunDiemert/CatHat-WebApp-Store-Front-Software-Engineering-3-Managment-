import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(search: NgForm) {
    const searchTerm = search.value.searchTerm;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate(["search/" + searchTerm]);
    });
  }
}
