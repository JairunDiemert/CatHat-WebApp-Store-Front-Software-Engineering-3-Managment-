import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router) {
    if (this.Auth.getisLoggedIn()) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {}

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#email").value;
    const password = target.querySelector("#password").value;

    this.Auth.getUserDetails(username, password).subscribe((data) => {
      if (data.success) {
        this.Auth.setLoggedIn(true);
        location.reload();
      } else {
        window.alert(data.message);
      }
    });
    console.log(username, password);
  }
}
