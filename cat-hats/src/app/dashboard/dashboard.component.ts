import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  total = "Loading your total...";
  email = "Getting your email...";

  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user.getData().subscribe((data) => {
      if (data.status) {
        this.total = data.total;
        this.email = data.email;
      } else {
        this.router.navigate(["logout"]);
      }
    });
  }

  updateTotal(event) {
    const value = event.target.parentNode.querySelector("#myTotal").value;
    this.user.updateTotal(value).subscribe((data) => {
      if (data.success) {
        alert("Your total was updated");
      } else {
        alert("Some problem");
      }
    });
  }
}
