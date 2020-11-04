import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  addSchedule(event) {
    event.preventDefault();
    const target = event.target;
    const scheduleDate = target.querySelector("#scheduleDate").value;
    const userEmail = target.querySelector("#userEmail").value;
    const catalogTitle = target.querySelector("#catalogTitle").value;

    this.auth
      .addSchedule(scheduleDate, userEmail, catalogTitle)
      .subscribe((data) => {
        console.log(data);
        if (data.success) {
          this.router.navigate(["home"]);
        }
      });

    console.log(scheduleDate, userEmail, catalogTitle);
  }
}
